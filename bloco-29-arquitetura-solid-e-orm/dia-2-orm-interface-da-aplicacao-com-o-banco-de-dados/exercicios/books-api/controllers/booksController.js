const express = require('express');
const { UPSERT } = require('sequelize/dist/lib/query-types');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll({
      order: [
        ['title', 'ASC']
      ]
    });

    return res.status(200).json(books)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'patrao, deu algum xabu'
    });
  };
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if(!book) res.status(404).json({ message: 'Livro não encontrado!' });

    return res.status(200).json(book)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'patrao, deu algum xabu'
    });
  };
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(200).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'patrao, deu algum xabu'
    });
  };
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const updateBook = await Book.update(
      { title, author, pageQuantity, updatedAt: new Date(), },
      { where: { id } },
    );

    if(!updateBook) res.status(404).json({ message: 'Livro não encontrado!' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });

  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'patrao, deu algum xabu'
    });
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.destroy(
      { where: { id } },
    );

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'patrao, deu algum xabu'
    });
  };
});

module.exports = router;