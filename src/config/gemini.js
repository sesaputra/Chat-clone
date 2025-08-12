
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC3PFj1mnG60owLqRJB3RdVGsaEjcWN9BE"; // Ganti dengan API key Gemini kamu
const MODEL_NAME = "gemini-1.5-flash";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const geminiAPI = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Maaf, terjadi kesalahan. Silakan coba lagi.";
  }
};

export { geminiAPI };