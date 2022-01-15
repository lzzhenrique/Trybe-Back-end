const mysql = require('mysql2/promise');

let connection = null;


module.exports = () => {
  return connection ? connection : connection = mysql.createPool({
    host: 'localhost',
    user: 'Luiz',
    port: 3000,
    password: 'trybe123',
    database: 'cep_lookup'
  });
}