const connection = require('../connection');

module.exports = async (song) => {
  const insert =  (await connection()).collection('song').insertOne(song);
  return insert
};