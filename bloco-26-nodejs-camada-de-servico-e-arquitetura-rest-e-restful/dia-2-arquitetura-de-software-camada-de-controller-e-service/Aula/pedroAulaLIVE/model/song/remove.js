const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  return (await connection()).collection('song').deleteOne(
    { _id: ObjectId(id) },
  );
}; 