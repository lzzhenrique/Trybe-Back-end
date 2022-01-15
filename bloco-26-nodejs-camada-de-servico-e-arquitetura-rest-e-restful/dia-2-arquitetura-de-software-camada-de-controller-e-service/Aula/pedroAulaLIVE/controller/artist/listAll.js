const model = require('../../model/artist');

module.exports = async (req, res, next) => {
  try {
    const artists = await model.find();

    return res.status(200).send(artists);
  } catch(err) {
    next(err);
  };
};