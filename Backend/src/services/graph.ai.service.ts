import { HumanMessage } from "@langchain/core/messages";
import {
  type GraphNode,
  StateSchema,
  MessagesValue,
  StateGraph,
  START,
  END,
  ReducedValue,
} from "@langchain/langgraph";
import { geminiModel, cohereModel, mistralModel } from "./ai.service.js";
import { z } from "zod";
import { createAgent, providerStrategy } from "langchain";

// "ReducedValue" lets you define how a state field is updated when new values arrive, instead of simply overwriting it. (research about it)
const State = new StateSchema({
  messages: MessagesValue,
  solution_1: new ReducedValue(z.string().default(""), {
    reducer: (current, next) => {
      return next;
    },
  }),
  solution_2: new ReducedValue(z.string().default(""), {
    reducer: (current, next) => {
      return next;
    },
  }),
  judge_recommendation: new ReducedValue(
    z.object().default({
      solution_1_score: 0,
      solution_2_score: 0,
    }),
    {
      reducer: (current, next) => {
        return next;
      },
    },
  ),
});

// By writing "GraphNode<typeof State>", GraphNode<...> is being told what kind of state shape this node expects and returns.
const solutionNode: GraphNode<typeof State> = async (state: typeof State) => {
  const [mistral_solution, cohere_solution] = await Promise.all([
    mistralModel.invoke(state.messages[0].content),
    cohereModel.invoke(state.messages[0].content),
  ]);

  return {
    solution_1: mistral_solution.text,
    solution_2: cohere_solution.text,
  };
};

const judgeNode: GraphNode<typeof State> = async (state: typeof State) => {
  const { solution_1, solution_2 } = state;

  const judgeAgent = createAgent({
    model: geminiModel,
    tools: [],
    responseFormat: providerStrategy(
      z.object({
        solution_1_score: z.number().min(0).max(10),
        solution_2_score: z.number().min(0).max(10),
      }),
    ),
  });

  const judgeResponse = await judgeAgent.invoke({
    messages: [
      new HumanMessage(
        `You are a judge tasked with evaluating the quality of two solutions to a problem. The problem is: ${state.messages[0].content}. The first solution is: ${solution_1}. The second solution is: ${solution_2}. Please provide a score between 0 and 10 for each solution, where 0 means the solution is completely incorrect or irrelevant, and 10 means the solution is perfect and fully addresses the problem.`,
      ),
    ],
  });

  const result = judgeResponse.structuredResponse;

  return {
    judge_recommendation: result,
  };
};

const graph = new StateGraph(State)
  .addNode("solution", solutionNode)
  .addNode("judge", judgeNode)
  .addEdge(START, "solution")
  .addEdge("solution", "judge")
  .addEdge("judge", END)
  .compile();

export default async function (userMessage: string) {
  const graphResponse = await graph.invoke({
    messages: [new HumanMessage(userMessage)],
  });

  console.log("graphResponse: ", graphResponse);

  return graphResponse.messages;
}
