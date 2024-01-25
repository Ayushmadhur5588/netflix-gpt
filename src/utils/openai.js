import OpenAI from "openai";
import { open_ai_api_key } from "./constants";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
