import express from 'express';
import cors from 'cors';
import { userRoutes } from './router/userRoutes.js';

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
