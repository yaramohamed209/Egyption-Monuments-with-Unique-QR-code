import express from 'express';
import { Monuments } from './data.js';


const app = express();

app.get('/api/Monuments', (req, res) => {
    res.send(Monuments);
  });
  
  const port = process.env.PORT || 5000; 
  app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);

  });