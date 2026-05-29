import express from "express";
import runGraph from "./services/ai/graph.ai.service.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "OK",
  });
});

app.post("/run-graph", async (req, res) => {
  const { query } = req.body;

  const result = await runGraph(query);
  res.json(result);
});

export default app;
