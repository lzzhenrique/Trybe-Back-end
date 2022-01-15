const connection = require('./connection');

const getAll = async () => {
  try {
    const books = await connection();
    const filter = await books.collection('books').find().toArray();

    return filter;

  }catch(err) {
    console.log(err.message);
  };
};

const getByID = async (id) => {
  try {
    const books = await connection();
    const filter = books.collection('books')
    .find(
      {
        author_id: parseInt(id),
      },
      {
        projection: {
          _id: 0,
        }
      })
    .toArray();

    return filter;
  }catch(err) {
    console.log(err.message);
  };
};

const createBook = async (bookTitle, author_id) => {
  try {
    await connection();

    await collection('books')
      .insertOne(
        {
          title: bookTitle,
          author_id: author_id
        })
    
    return true;
  }catch(err) {
    console.log(err.message);
  };
};

const isValid = async (bookTitle, author_id) => {

  if(!bookTitle || typeof bookTitle !== 'string') return false;
  if(!author_id || typeof author_id !== 'string' || author_id.length !== 24) return false;

  return true;

}

module.exports = {
  getAll,
  getByID,
  createBook,
  isValid
};