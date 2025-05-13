import express from 'express';
import snow from './routes/snow.route';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use('/snow', snow)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});