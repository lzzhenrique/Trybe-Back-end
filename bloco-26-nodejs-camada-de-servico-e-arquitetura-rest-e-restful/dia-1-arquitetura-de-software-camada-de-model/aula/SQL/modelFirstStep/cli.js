const readline = require('readline-sync');
const userModel = require('./userModel');

const start = async () => {
  const username = readline.question('Digite seu nome de usuario');
  const user = await userModel.getUser(username);

  if (!user) {
    return console.log('Usuario nao encontrado');
  }

  console.log(`Aqui estao os dados do usuario: \n${user}`)
};

start();