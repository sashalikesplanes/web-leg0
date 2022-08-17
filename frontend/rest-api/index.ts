import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import apiRoutes from './routes';
import path from 'path';

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.NODE_ENV === 'dev' ? process.env.FRONTEND_DEV_URL : process.env.FRONTEND_PROD_URL
}))
const port = process.env.PORT || 5000;
app.use(helmet());

app.use(apiRoutes);

app.use('/assets', express.static(path.join(__dirname, '..', '..', 'assets')));

app.listen(port, () => {
  console.log(`[server]: Server running on http://localhost:${port}`);
});
