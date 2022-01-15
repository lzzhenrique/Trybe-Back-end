const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../index');

// const consoleLogStub = stub(console, 'log');
// before(()=> consoleLogStub.returns(true));
// after(()=> consoleLogStub.restore());

describe('Testa rota POST /employees', () => {
  describe('quando os dados do body sao validos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app)
          .post('/managedEmployees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            city: "TrybeCity",
            street: "Rua Teste",
            number: 42
          })

          console.log(postEmployee)

          const { body: { id } } = postEmployee;

          getEmployee = await chai.request(app)
            .get(`/employees/${id}`);
      } catch (e) {
        console.error(e.message)
      }
    });

    it.only('retorna 201 - created', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(201);
    });

    it('retorna um atributo "id", que eh um numero', async () => {
      const { body: { id } } = postEmployee;

      expect(typeof id).to.be.equals("number");
    });

    it('retorna uma mensagem cadastrado com sucesso', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals("Cadastrado com sucesso");
    });

    it('retorna um atributo "id", que eh um numero', async () => {
      const { body: { id } } = postEmployee;

      expect(typeof id).to.be.equals("number");
    });
  });

  describe('quando os dados do body sao invalidos', () => {
    let postEmployee;

    before(async () => {
      try{
        // removendo city
        postEmployee = await chai.request(app)
          .post('/managedEmployees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            street: "Rua Teste",
            number: 42
          })
          console.log(postEmployee)
      } catch (error) {
        console.error(error.message);
      }
    });
  
    it('Retorna 500 - Internal Server Erro', async () => {
      const { status } = postEmployee;
  
      expect(status).to.be.equals(500);
    });
  
    it('Retornauma mensagem "Algo deu errado"', async () => {
      const { body: { message } } = postEmployee;
  
      expect(message).to.be.equals("Algo deu errado");
    });

  });
})