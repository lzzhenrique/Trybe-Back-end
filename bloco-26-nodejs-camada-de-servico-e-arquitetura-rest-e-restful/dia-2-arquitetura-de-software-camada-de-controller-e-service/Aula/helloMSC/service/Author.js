const Author = require('../models/Authors');

const create = async (firstName, middleName, lastName) => {
  const existAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  return Author.create(firstName, middleName, lastName);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if(!author) {
    return {
      error: {
        code: 'Not Found',
        message: `Nao foi possivel encontrar uma pessoa autora com o id ${id}`
      },
    };
  }

  return author;
};

const getAll = async () => Author.getAll();

module.exports = {
  create,
  findById,
  getAll,
};