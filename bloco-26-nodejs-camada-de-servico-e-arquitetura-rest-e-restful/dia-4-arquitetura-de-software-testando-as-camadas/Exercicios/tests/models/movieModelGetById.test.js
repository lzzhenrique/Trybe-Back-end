const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoConnection = require('../../models/connection');
const moviesModel = require('../../models/movieModel');

describe('Procura um filme em especifico no BD', () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;

  const expectedFilm = {
    _id: ObjectId('604cb554311d68f491ba5781'),
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async() => {
    const URLMock = await DBServer.getUri();

    connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((conn) => conn.db('model_example'));

    sinon.stub(mongoConnection, 'getConnection')
      .resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('Quando o filme em questão é encontrado', () => {

    before(async () => {
      await connectionMock.collection('movies').insertOne({ ...expectedFilm });
    });

    after(async () => {
      await connectionMock.collection('movies').drop();
    })

    it('Retorna um objeto', async () => {
      const response  = await moviesModel.getById(expectedFilm._id);

      expect(response).to.be.a('object');
    });

    it('O objeto nao esta vazio!', async () => {
      const response  = await moviesModel.getById(expectedFilm._id);

      expect(response).to.be.not.empty;
    });

    it(' O objeto tem todas as propriedades do filme procurado', async () => {
      const response  = await moviesModel.getById(expectedFilm._id);
      
      expect(response).to.have.all.deep.keys(['_id', 'title', 'directedBy', 'releaseYear']);
    });
  });

  describe('Quando o filme em questão não é encontrado', () => {
    it('Retorna null', async () => {
      const response  = await moviesModel.getById(expectedFilm._id);
      expect(response).to.be.a('null');
    });
  });
});