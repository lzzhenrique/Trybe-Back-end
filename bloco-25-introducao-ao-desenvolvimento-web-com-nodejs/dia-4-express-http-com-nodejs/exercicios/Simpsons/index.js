const express = require('express');
const bodyParser = require('body-parser');
const dataSimpsons = ('data.json');
const simpsonsUtils = require('./fs-utils');

const app = express();
app.use(bodyParser.json());

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const readSimpsons = await simpsonsUtils.getSimpsons();

    const findRep = readSimpsons.find((simpson) => simpson.id === id);
    if(findRep) {
      return res.status(409).json({ message: 'id already exists' });
    };

    readSimpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(readSimpsons);

    res.status(204).end();

  } catch(err) {
    return res.status(500).json({message: `Internal Server Error, ${err.message}`});    
  };
});

app.get('/simpsons', (req, res) => {
  try {
    res.status(200).json(dataSimpsons);
  } catch(err){
    res.status(500).json({message: `Internal Server Error, ${err.message}`});    
  };
});

app.get('/simpsons/:id', (req, res) => {
  try {
    const { id } = req.params
    const findChar = dataSimpsons.find((simpson) => simpson.id === id);

    if(!findChar) {
      return res.status(404).json({message: 'simpson not found'});
    };

    return res.status(200).json(findChar);
  } catch(err) {
    return res.status(500).json({message: `Internal Server Error, ${err.message}`});    
  }
});

app.listen(3005, () => {
  console.log('Aplicação ouvindo na porta 3005');
});