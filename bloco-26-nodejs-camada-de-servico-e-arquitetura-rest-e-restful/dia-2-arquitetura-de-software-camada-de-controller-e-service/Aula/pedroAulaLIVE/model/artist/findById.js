const connection = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  return ObjectId.isValid(id) ?
    (await connection()).collection('artist').findOne(ObjectId(id)) :
    null;
};