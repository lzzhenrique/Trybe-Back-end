const express = require('express');
const ProductModel = require('../models/productModels');
const router = express.Router();
const { OK, CREATED, NO_CONTENT, NOT_FOUND, BAD_REQUEST } = require('http-status-codes').StatusCodes;


router.get('/', async (_req, res, _next) => {
  try {
    const products = await ProductModel.getAll();

    return res.status(OK).send({ message: products }).end();
  } catch(error) {
    return res.status(NOT_FOUND).send({ message: error.message }).end();
  };
});

router.get('/:id', async (req, res, _next) => {
  try {
    const product = await ProductModel.getById(req.params.id);

    if(!product) res.status(404).send({
      message: "Produto nao encontrado"
    });

    return res.status(OK).send({ message: product }).end();
  } catch(error) {
    return res.status(NOT_FOUND).send({ message: error.message }).end();
  };

});

router.post('/', async (req, res) => {1
  try {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    return res.status(CREATED).send({ message: newProduct }).end();
  } catch(error) {
    return res.status(BAD_REQUEST).send({ message: error.message }).end();
  };
});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;

    const product = await ProductModel.update(req.params.id, name, brand);

    return res.status(OK).json(product);
  } catch(error) {
    return res.status(BAD_REQUEST).send({ message: error.message }).end();
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await ProductModel.exclude(req.params.id);

    return res.status(NO_CONTENT).send({ message: product }).end();
  } catch(error) {
    return res.status(BAD_REQUEST).send({ message: error.message }).end();
  };
});

module.exports = router;