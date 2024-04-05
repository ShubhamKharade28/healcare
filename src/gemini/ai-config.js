import ApiKey from "./apikey";
import { GoogleGenerativeAI } from "@google/generative-ai";


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(ApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const getAiResponse = async (prompt) => {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text;
    return text();
}

export let prevPrompt = '';

export default getAiResponse;
    