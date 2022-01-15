const connection = require('./connection');

module.exports = async (CEP) => {
  const findCEP = await connection().execute(`SELECT * FROM ceps WHERE cep=?`, [CEP]);

  if(!findCEP) return null;

  return findCEP;
};