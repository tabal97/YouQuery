import generateSummary from './summarizeService.js';

const summarizeText = async (req, res) => {
    const { transcribedText, keywords } = req.body;

    if (!transcribedText || transcribedText.trim() === '') {
        return res.status(400).send('transcribedText is required and cannot be empty.');
    }

    const promptBase = `Summarize the following text:`;
    const keywordString = keywords && keywords.length ? ` focusing on these keywords: ${keywords.join(", ")}` : '';
    const prompt = keywordString ? `${promptBase}${keywordString}\n\n${transcribedText}` : `${promptBase}\n\n${transcribedText}`;

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
