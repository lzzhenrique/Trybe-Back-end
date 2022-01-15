const connection = require('./connection');

const getFullName = ({id, firstName, middleName, lastName}) => {
  const fullNameArray = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");

  const fullNameDolar = `
  ${firstName ? firstName : ''}
  ${middleName ? middleName : ''} 
  ${lastName ? lastName : ''} `;

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullNameArray,
    fullNameDolar
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
    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

    return authors.map(serialize).map(getFullName);

  }catch(err) {
    console.log(err.message);
  };
};

const getByID = async (id) => {
  try {
    const [authorData] = await connection.execute(
      'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?', [id]
    );

    if (!authorData) return null;

    const { firstName, middleName, lastName } = authorData.map(serialize)[0];

    return getFullName({
      id,
      firstName,
      middleName,
      lastName
    });
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

const isValid = (first_name, _middle_name, last_name) => {
  if(!first_name || typeof first_name !== 'string') return false;
  if(!last_name || typeof last_name !== 'string') return false;

  return true;
};

module.exports = {
  getAll,
  getByID,
  createAuthor,
  isValid
};