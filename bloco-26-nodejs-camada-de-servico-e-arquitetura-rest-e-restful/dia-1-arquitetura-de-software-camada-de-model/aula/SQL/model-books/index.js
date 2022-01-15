const bodyParser = require('body-parser');
const express = require('express');
const Books = require('./models/Books')

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.get('/books', async (_req, res) => {
  try {
    const books = await Books.getAll();

    return res.status(200).json(books);
  } catch(err){
    console.log(err)
  }
})

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Books.getByID(id);

    return res.status(200).json(books);
  } catch(err){
    console.log(err);
  };
});

app.post('/books', async (req, res) => {
  try {
    const { title, author_id } = req.body;

    if(!Books.isValid(title, author_id)) return res.status(400).json({ message: 'Invalid Data'});


    await Books.createBook(title, author_id);

    res.status(201).json({ message: 'Book created sucefully!' });

  } catch(err){
    console.log(err);
  };
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});