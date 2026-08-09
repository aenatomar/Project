import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (_, res) => res.json({ ok: true, service: 'ABTalks API' }));
app.post('/api/proofs', (req, res) => {
  const { githubUrl, linkedinUrl } = req.body;
  if (!githubUrl || !linkedinUrl) return res.status(400).json({ message: 'Both proof links are required.' });
  res.status(201).json({ message: 'Proof recorded', proof: { githubUrl, linkedinUrl, submittedAt: new Date() } });
});
app.listen(process.env.PORT || 5000, () => console.log('ABTalks API running on port 5000'));
