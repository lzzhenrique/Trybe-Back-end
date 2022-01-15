const connection = require('../connection');

module.exports = async () => {
  return (await connection()).collection('song').find().toArray();
};