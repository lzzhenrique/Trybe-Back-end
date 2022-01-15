const sinon = require('sinon');
const { expect } = require('chai')

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');
const { request, response } = require('express');

describe('Ao chamar o controller de getById', () => {
  describe('quando o filme existe no banco de dados', () => {
    const request = {
      params: {
        id: '604cb554311d68f491ba5781',
      },
    };
    const response = {};
    const movie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(movie);
    });

    after(() => {
      MoviesServices.getById.restore();
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado o método "json" com o filme procurado', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith(movie)).to.be.equal(true);
    });
  });

  describe('quando o id nao é passado na requisição', async () => {
    const request = {
      params: {},
    };
    const response = {};
    const notID = "id must be informed"

    before(async () => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(null);
    });

    after(() => {
      MoviesServices.getById.restore();
    });
    
    
    it('é chamado o método "status" passando o código 400', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o método "send" com a messagem "id must be informed"', async () => {
      await MoviesController.getById(request, response);

      expect(response.send.calledWith('id must be informed')).to.be.equal(true);
    });
  });

  describe('quando o filme nao existe no BD', async () => {
    const request = {
      params: {
        id: '604cb554311d68f491ba5781adfadw',
      },
    };
    const response = {};

    before(async () => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(null);
    });

    after(() => {
      MoviesServices.getById.restore();
    });
    
    
    it('é chamado o método "status" passando o código 404', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "send" com a messagem "There is no movie with this id"', async () => {
      await MoviesController.getById(request, response);

      expect(response.send.calledWith('There is no movie with this id')).to.be.equal(true);
    });
  });
});