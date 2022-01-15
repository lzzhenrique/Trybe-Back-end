const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const MONGO_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
  try{
    return db 
      ? Promise.resolve(db)
      : MongoClient.connect(MONGO_URL, OPTIONS)
      .then((conn) => {
        db = conn.db('model_example');
        return db;
      });
  }catch(err) {
    console.error(err);
    process.exit();
  };
};

module.exports = connection;