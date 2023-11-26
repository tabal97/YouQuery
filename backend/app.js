import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

app.use(routes);
app.use('/public', express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

