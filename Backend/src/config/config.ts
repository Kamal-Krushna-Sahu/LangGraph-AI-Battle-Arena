import "dotenv/config";

type CONFIG = {
  readonly PORT: number;
  readonly GEMINI_API_KEY: string;
  readonly MISTRAL_API_KEY: string;
  readonly COHERE_API_KEY: string;
};

const config: CONFIG = {
  PORT: parseInt(process.env.PORT || "4000", 10),
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
  MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
  COHERE_API_KEY: process.env.COHERE_API_KEY || "",
};

export default config;
