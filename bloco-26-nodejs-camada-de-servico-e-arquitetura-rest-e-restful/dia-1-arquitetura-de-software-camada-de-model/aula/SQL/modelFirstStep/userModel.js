const db = require('./db');

const getUser = async (username) => {
  return db.findOne({ username })
  .then(result => result || null);
};

module.export = getUser