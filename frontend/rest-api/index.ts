import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(helmet);

app.get('/', (req, res) => {
  res.send('Express + TS Server, hello from live editing');
});

app.listen(port, () => {
  console.log(`[server]: Server running on http://localhost:${port}`);
});
