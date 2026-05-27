import express from 'express';
import cors from 'cors';
import { createCheckout } from './api/create-checkout.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-checkout', async (req, res) => {
  await createCheckout(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
