import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateSummary = async (prompt) =>  {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: prompt}],
            max_tokens: 200,
            temperature: Number(process.env.TEMPERATURE || 0.4)
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error in ChatGPT Service:', error);

        if (error.response) {
            console.error('Error Data:', error.response.data);
            console.error('Error Status:', error.response.status);
            console.error('Error Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error Request:', error.request);
        } else {
            console.error('Error Message:', error.message);
        }

        throw error;
    }
}

export default generateSummary;
