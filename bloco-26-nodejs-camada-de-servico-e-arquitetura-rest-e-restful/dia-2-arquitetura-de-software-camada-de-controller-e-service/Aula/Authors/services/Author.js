const Author = require('../models/Author');

const getFullName = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const isValid = (first_name, _middle_name, last_name) => {
  if(!first_name || typeof first_name !== 'string') return false;
  if(!last_name || typeof last_name !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getFullName);
};

const findById = async (id) => {
  const authors = await Author.getByID(id);

  return getFullName(authors);
}

const create = async (firstName, middleName, lastName) => {

  const valid = isValid(firstName, middleName, lastName);

  if(!valid) return false;

  const { insertedId } = await Author.createAuthor(firstName, middleName, lastName);

  return getFullName({
    id: insertedId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  create
};  