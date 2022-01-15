const sinon = require('sinon');
const { expect } = require('chai');
const moviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Procura um filme em especifico no BD', () => {
  
  describe('quando existe o filme procurado', () => {
    const FILM_ID = '604cb554311d68f491ba5781';
    before(() => {
      sinon.stub(moviesModel, 'getById')
        .resolves({
          _id: FILM_ID,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.getById();

      expect(response).to.be.an('object');
    });

    it('o objeto nao esta vazio', async () => {
      const response = await MoviesService.getById();

      expect(response).to.be.not.empty;
    });

    it(' O objeto tem todas as propriedades do filme procurado', async () => {
      const response  = await MoviesService.getById(FILM_ID);

      console.log(response)
      
      expect(response).to.have.all.deep.keys(['_id', 'title', 'directedBy', 'releaseYear']);
    });
  });

  describe('quando o filme nao existe', () => {
    before(() => {
      sinon.stub(MoviesService, 'getById')
        .resolves({});
    });

    it('Retorna um objeto', async () => {
      const response  = await MoviesService.getById();
      expect(response).to.be.a('object');
    });

    it('O objeto está vazio', async () => {
      const response  = await MoviesService.getById();
      expect(response).to.be.empty;
    });
  });
});