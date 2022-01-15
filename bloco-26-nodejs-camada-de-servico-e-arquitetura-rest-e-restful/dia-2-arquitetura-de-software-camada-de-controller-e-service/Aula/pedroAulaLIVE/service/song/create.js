const songModel = require('../../model/song');
const songArtist = require('../../model/artist');

module.exports = async (song) => {
  const { artistId } = songModel;
  const foundArtist = songArtist.findById(artistId)

  if (!foundArtist) return null;

  return songModel.create(song)
};
