import express from 'express';
import summarizeText from './summarizeController.js';

const router = express.Router();

router.post('/summarize', summarizeText);

export default router;
