import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import apiRoutes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(helmet());

app.use(apiRoutes);

app.listen(port, () => {
  console.log(`[server]: Server running on http://localhost:${port}`);
});
