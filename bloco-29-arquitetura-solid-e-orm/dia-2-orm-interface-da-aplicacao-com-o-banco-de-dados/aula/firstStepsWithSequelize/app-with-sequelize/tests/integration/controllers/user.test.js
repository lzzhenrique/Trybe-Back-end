const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../index');
const { User } = require('../../models');

describe('Busca todos os usuarios', () => {
  describe('quando nao existe nenhum usuario cadastrado', () => {
    const findAllStub = stub(User, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called User.findAll', async () => {
      await chai.request(app)
        .get('/user');

      expect(User.findAllStub.calledOnce).to.be.equals(true);
    });

    it('o status eh 200', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta eh um array', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.body).to.be.an('array');
    });

    it('o array eh vazio', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.body).to.be.empty;
    });
  });
});
