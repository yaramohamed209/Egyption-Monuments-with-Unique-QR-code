import express from 'express';
import monument from '../monuments/monuments_info.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await monument.remove({});
  const createdMonuments = await monument.insertMany(data.monuments);
  res.send({ createdMonuments });
});
export default seedRouter;
