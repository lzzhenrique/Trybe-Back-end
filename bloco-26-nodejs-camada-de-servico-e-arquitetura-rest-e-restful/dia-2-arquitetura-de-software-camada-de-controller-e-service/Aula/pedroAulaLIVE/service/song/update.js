const songModel = require('../../model/song');
const artistModel = require('../../model/artist');

module.exports = async (id) => {
  return songModel.remove(id)
};
