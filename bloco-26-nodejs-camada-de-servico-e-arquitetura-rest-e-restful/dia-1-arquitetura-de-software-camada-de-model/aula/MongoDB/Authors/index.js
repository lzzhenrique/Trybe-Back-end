const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');

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
    const author = await Author.getByID(id);

    if(!author) return res.status(404).json({ message: 'Not found'})

    res.status(200).json(author);
  } catch(err) {
    console.log(err.message)
  };
});

app.post('/authors', async (req, res) => {
  try {
    const { first_name, middle_name, last_name } = req.body;
    

    if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Invalid Data'});

    await Author.createAuthor(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Author created sucefully!' });
  } catch(err) {
    console.log(err.message)
  };
});


app.listen(PORT, () =>{
  console.log(`Example app listening on port ${PORT}!`);
});