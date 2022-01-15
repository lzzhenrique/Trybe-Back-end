const connection = require('./connection');

const getAll = async () => {
  try {
    const [books] = await connection.execute('SELECT title FROM books');

    return books;
  }catch(err) {
    console.log(err.message);
  };
};

const getByID = async (id) => {
  try {
    const [book] = await connection.execute(`SELECT * FROM books WHERE author_id=?`, [id]);

    if(!book.length) return null;

    return book

  }catch(err) {
    console.log(err.message);
  };
};

const createBook = async (title, author_id) => {
  try {
    connection.execute(
      'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
      [title, author_id]
      );
  }catch(err) {
    console.log(err.message);
  };
};

const isValid = async (title, author_id) => {
  const [author] = await connection.execute(`SELECT * FROM authors WHERE id=?`, [author_id]);
  

  if(!title || title.length < 3) return false;
  if(!author_id || !author.length) return false;

  return true;
}

module.exports = {
  getAll,
  getByID,
  createBook,
  isValid
};