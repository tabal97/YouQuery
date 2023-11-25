import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { v4 as uuidv4 } from 'uuid';

const openai = new OpenAI();

const generateSpeech = async (text) => {
  try {
    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "echo",
      input: text,
    });

    const buffer = Buffer.from(await response.arrayBuffer());

    const uniqueFileName = `speech_${uuidv4()}.mp3`;
    const filePath = path.resolve(`./public/${uniqueFileName}`);

    await fs.promises.writeFile(filePath, buffer);

    return filePath;
  } catch (error) {
    console.error("Error in speech service:", error.message);
    throw error;
  }
}

export default generateSpeech;
