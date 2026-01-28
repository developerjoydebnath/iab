
import { GoogleGenAI } from "@google/genai";

export const askCampaignAssistant = async (question: string) => {
  // Always create a new GoogleGenAI instance right before making an API call to ensure it uses the latest key
  const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the Digital Assistant for 'Maulana Gazi Ataur Rahman', the Islami Andolan Bangladesh (IAB) candidate for Gazipur-5 (Kaliganj).
        
        Candidate Profile:
        - Name: Maulana Gazi Ataur Rahman.
        - Position: Joint Secretary General of IAB, Principal of Fazlul Ulum Zahiria Madrasa.
        - Education: Kamil (Hadith), MSS (Political Science, Dhaka University).
        - Manifesto Highlights: Good governance, justice, modern communication in Kaliganj, drug-free society, Islamic values, quality education, and healthcare.
        
        Mandatory Rules:
        1. Respond strictly in Bangla.
        2. Tone: Respectful, humble, and value-driven.
        3. Key Symbol: Hand Fan (হাতপাখা - Hat Pakha).
        4. Mission: Establishing 'Insaaf' (Justice) and a corruption-free Bangladesh based on Islamic principles and the spirit of the 2024 mass uprising.
        5. Start responses with 'আসসালামু আলাইকুম'.
        6. Keep answers concise and relevant to the Gazipur-5 constituency and national IAB goals.`,
      }
    });

    return response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না। ইনশাআল্লাহ শীঘ্রই ফিরে আসব।";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "সিস্টেমটি বর্তমানে ব্যস্ত রয়েছে। দয়া করে কিছুক্ষণ পর আবার চেষ্টা করুন।";
  }
};
