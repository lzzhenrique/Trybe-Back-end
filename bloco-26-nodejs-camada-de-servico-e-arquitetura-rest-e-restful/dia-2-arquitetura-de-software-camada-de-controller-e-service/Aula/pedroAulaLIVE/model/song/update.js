const connection = require('../connection');
const { ObjectId } = require('mongodb');

module.export = async (song) => {
  const { _id, ...songWithoutId } = song;

  await (await connection()).collection('song').updateOne(
    { _id: _id },
    {
      $set: songWithoutId
    },
  )

  return song;
};