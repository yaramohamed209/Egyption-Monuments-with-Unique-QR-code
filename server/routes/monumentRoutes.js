import express from 'express';
import monument from '../monuments/monuments_info.js';

const monumentRouter = express.Router();

monumentRouter.get('/', async (req, res) => {
  const monuments = await monument.find();
  res.send(monuments);
});
monumentRouter.get('/slug/slug', async (req, res) => {
  const monument = await monument.findOne({ slug: req.params.slug });
  if (product) {
    res.send(monument);
  } else {
    res.status(404).send({ message: 'Monument not exist' });
  }
});
export default monumentRouter;
