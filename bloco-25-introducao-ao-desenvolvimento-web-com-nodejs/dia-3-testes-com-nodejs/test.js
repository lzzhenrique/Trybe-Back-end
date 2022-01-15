const { expect } = require('chai');

const numbApprove = require('./numbApprove.js');

describe('Executa a funcao numbApprove', () => {
  describe('Quando o numero for menor do que 0', () => {
    describe('A resposta', () => {
      it('é uma "string"', () => {
        const resposta = numbApprove(-5);
    
        expect(resposta).to.be.a('string');
      });

      it('retorna "Negativo"', () => {
        const resposta = numbApprove(-5);
    
        expect(resposta).to.be.equals('Negativo');
      });
    });
  });

  describe('Quando o numero for maior do que 0', () => {
    describe('A resposta', () => {
      it('é uma "string"', () => {
        const resposta = numbApprove(5);
    
        expect(resposta).to.be.a('string');
      });

      it('retorna "Positivo"', () => {
        const resposta = numbApprove(5);
    
        expect(resposta).to.be.equals('Positivo');
      });
    });
  });

  describe('Quando o numero for igual a 0', () => {
    describe('A resposta', () => {
      it('é uma "string"', () => {
        const resposta = numbApprove(0);
    
        expect(resposta).to.be.a('string');
      });

      it('retorna "Neutro"', () => {
        const resposta = numbApprove(0);
    
        expect(resposta).to.be.equals('Neutro');
      });
    });
  });
});