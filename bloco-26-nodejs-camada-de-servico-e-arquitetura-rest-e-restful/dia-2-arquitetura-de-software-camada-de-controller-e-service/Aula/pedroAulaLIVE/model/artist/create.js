const connection = require('../connection');

module.exports = async (artist) => {
  return (await connection()).collection('artist').insertOne(artist);
};