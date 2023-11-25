import generateSpeech from "./speechService.js";
import path from 'path';

const speech = async (req, res) => {
  const { text } = req.body;

  try {
    const filePath = await generateSpeech(text);
    const fileUrl = `${req.protocol}://${req.get('host')}/public/${path.basename(filePath)}`;
    
    res.status(200).json({ fileUrl });
  } catch (error) {
    console.error("An error occurred in the controller:", error.message);
    
    res.status(500).send({ message: "An error occurred in the controller" });
  }
};

export default speech;
