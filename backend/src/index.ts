import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
