import express from 'express';
import summarizeRoutes from './routes.js';

const app = express();
app.use(express.json());

app.use(summarizeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

