const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'deu xabu meu patrao'
    });
  };
});

router.get('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const user = await User.findByPk(id);

    if(!user) res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'deu xabu meu patrao'
    });
  };
});

router.get('/search/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email } });

    if(!user) res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'deu xabu meu patrao'
    });
  };
});

router.post('/', async (req, res) => {
  try{
    const { fullname, email } = req.body;
    const newUser = await User.create({ fullname, email });

    return res.status(200).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'deu xabu meu patrao'
    });
  };
});

router.put('/:id', async (req, res) => {
  try{
    const { fullName, email } = req.body;
    const { id } = req.params;

    const updateUser = await User.update(
      { fullName, email },
      { where: { id } },
    );

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });

  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'deu xabu meu patrao'
    });
  };
});

router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const deleteUser = await User.destroy(
      { where: { id } },
    );

    console.log(deleteUser)

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });

  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'deu xabu meu patrao'
    });
  };
});

module.exports = router;