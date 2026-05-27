import express from "express";
import runGraph from "./services/ai/graph.ai.service.js";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "OK",
  });
});

app.post("/run-graph", async (req, res) => {
  const result = await runGraph(
    "Write code for factorial function in JavaScript.",
  );
  res.json(result);
});

export default app;
