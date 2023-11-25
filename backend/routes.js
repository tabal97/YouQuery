import express from 'express';
import summarizeText from './summarizeController.js';
import speech from './speechController.js';

const router = express.Router();

router.post('/summarize', summarizeText);
router.post('/speech', speech);

export default router;
