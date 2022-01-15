const connection = require('./connection');
const { ObjectId } = require('mongodb');

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
      return {
        id:_id, 
        firstName,
        middleName,
        lastName
      };
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

    return { firstName, middleName, lastName };

  } catch(err) {
    console.log(err.message);
  };
};

const createAuthor = async (first_name, middle_name, last_name) => {
  try {
    return connection()
      .then((db) => db.collection('authors').insertOne({
        first_name, middle_name, last_name
      }))
  } catch(err) {
    console.log(err.message);
  };
};


module.exports = {
  getAll,
  getByID,
  createAuthor,
};