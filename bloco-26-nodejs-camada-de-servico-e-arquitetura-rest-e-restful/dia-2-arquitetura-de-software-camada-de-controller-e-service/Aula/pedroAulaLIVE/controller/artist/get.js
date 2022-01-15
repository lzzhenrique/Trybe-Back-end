const model = require('../../model/artist');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const artist = await model.findById(id);

    if(!artist) return res.status(200).send(artist);

    return res.status(200).send(artist);
  } catch(err) {
    next(err);
  };
};