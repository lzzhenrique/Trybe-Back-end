const service = require('../../service/song');

module.exports = async (req, res, next) => {
  try {
    const artists = await service.find();

    return res.status(200).send(artists);
  } catch(err) {
    next(err);
  };
};