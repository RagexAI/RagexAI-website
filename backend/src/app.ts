import express from 'express';
import contactRoutes from './routes/email.routes.js';

const app = express();

app.use(express.json());

app.use('/api', contactRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
