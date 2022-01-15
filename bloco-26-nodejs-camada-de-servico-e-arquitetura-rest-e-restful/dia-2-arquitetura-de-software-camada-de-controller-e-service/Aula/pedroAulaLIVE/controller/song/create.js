const service = require('../../service/song');

module.exports = async (req, res, next) => {
  try {
    const { name, album, artistId } = req.body; 

    if (!artistId ||!name || !album) return res.status(400).send({ message: 'must inform artistId, name and album' });

    let newSong = { name, album, artistId };
    new Song = await service.create(newSong);

    if (!newSong) {
      return res.status(400).send({ message: 'invalid artist id' })
    }

    return res.status(201).send(newSong);
  } catch(err) {
    next(err);
  };
};