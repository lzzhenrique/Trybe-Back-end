const connection = require('../connection');

module.exports = async () => {
  return (await connection()).collection('artist').find().toArray();
};