const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const serialize = (authorData) => {
  try {
    return {
      id: authorData.id,
      firstName: authorData.first_name,
      middleName: authorData.middle_name,
      lastName: authorData.last_name,
    };  
  }catch(err) {
    console.log(err.message);
  };
};

const getAll = async () => {
  try {
    const authors = await connection();
    const filter = await authors.collection('authors').find().toArray();

    const organize = filter.map(({ _id, firstName, middleName, lastName }) => {
      return getFullName({
        id:_id, 
        firstName,
        middleName,
        lastName
      });
    });

    return organize;

  }catch(err) {
    console.log(err.message);
  };
};

const getByID = async (id) => {
  try {
    if (!ObjectId.isValid(id)) {
      return null;
  }

    const authorData = await connection();
    const filter = await authorData.collection('authors').findOne(new ObjectId(id))

    if (!filter) return null;


    const { firstName, middleName, lastName } = filter;

    return getFullName({ firstName, middleName, lastName });

  } catch(err) {
    console.log(err.message);
  };
};

const createAuthor = async (first_name, middle_name, last_name) => {
  try {
    connection.execute(
     'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
     [first_name, middle_name, last_name]
    );
  } catch(err) {
    console.log(err.message);
  };
};

const isValida = (first_name, _middle_name, last_name) => {
  if(!first_name || typeof first_name !== 'string') return false;
  if(!last_name || typeof last_name !== 'string') return false;

  return true;
};

module.exports = {
  getAll,
  getByID,
  createAuthor,
  isValida
};