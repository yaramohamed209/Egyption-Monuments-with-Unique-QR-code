import express from 'express';
import  Path from 'path'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import monumentRouter from './routes/monumentRoutes.js';
dotenv.config();

  mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/monuments', monumentRouter);


const __dirname = Path.resolve();
app.use(express.static(Path.join(__dirname, '../client/build')));
app.get('*', (req, res) =>
  res.sendFile(Path.join(__dirname, '../client/build/index.html'))
);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});