import express from 'express';
import data from './data.js';


const app = express();
//
app.get('/api/monuments', (req, res) => {
    res.send(data.monuments);
  });
  app.get('/api/monuments/slug/slug', (req, res) => {
    const monument =data.monuments.find(x=> x.slug ==req.params.slug);
    if(product){
      res.send(data.monuments);
    }
    else{
      res.status(404).send({message: 'Monument not exist'});
    }
  });
  const port = process.env.PORT || 5000; 
  app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);

  });