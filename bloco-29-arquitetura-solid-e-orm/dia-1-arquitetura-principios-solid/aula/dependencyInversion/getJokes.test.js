const { stub } = require('sinon');
const { expect } = require('chai');

const { getJokes } = require('../../dipExample');

const requesterStub = stub();

describe('Testando a funcao "getJokes"', function () {
  it('"requester stub" é  chamado uma vez', function () {
    getJokes(1, requesterStub);

    expect(requesterStub.calledOnce).to.be.equals(true)
  })
})