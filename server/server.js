import express from 'express';
import data from './data.js';


const app = express();
//
app.get('/api/monuments', (req, res) => {
    res.send(data.monuments);
  });
  
  const port = process.env.PORT || 5000; 
  app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);

  });