import { executePython } from './executePython.js';
import generateSummary from './summarizeService.js';

const summarizeText = async (req, res) => {
    const { youtubeUrl, context } = req.body;

    if (!youtubeUrl) {
        return res.status(400).send('Bad Request');
    }

    const transcribedText = await executePython('transcribe.py', youtubeUrl);

    if (!transcribedText || transcribedText.trim() === '') {
        return res.status(400).send('transcribedText is required and cannot be empty.');
    }

    const promptBase = `Summarize the following text:`;
    const contextString = context && `Given the following context, "${context}"`
    const prompt = contextString ? `${contextString}\n${promptBase}\n${transcribedText}` : `${promptBase}\n\n${transcribedText}`;

    try {
        const chatGPTResponse = await generateSummary(prompt);
        res.json({ summary: chatGPTResponse });
    } catch (error) {
        console.error('Error in summarizeController:', error);
        if (error.response) {
            res.status(error.response.status).send(error.response.data);
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
}

export default summarizeText;
