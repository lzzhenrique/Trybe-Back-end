const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./services/Author');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  try {
    const authors = await Author.getAll();

    res.status(200).json(authors);
  } catch(err) {
    console.log(err.message)
  };
});

app.get('/authors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);

    if(!author) return res.status(404).json({ message: 'Not found'})

    res.status(200).json(author);
  } catch(err) {
    console.log(err.message)
  };
});

app.post('/authors', async (req, res) => {
  try {
    const { first_name, middle_name, last_name } = req.body;
    
    const author = await Author.create(first_name, middle_name, last_name);

    if(!author) return res.status(400).json({ message: 'Invalid Data'});
    
    res.status(201).json(author);
  } catch(err) {
    console.log(err.message)
  };
});


app.listen(PORT, () =>{
  console.log(`Example app listening on port ${PORT}!`);
});