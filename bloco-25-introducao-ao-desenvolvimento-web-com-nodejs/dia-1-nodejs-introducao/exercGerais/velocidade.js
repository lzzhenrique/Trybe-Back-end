const readline = require('readline-sync');


const calcVel = () => {
  const distancy = readline.question('Qual é a distância que o carro percorreu? (em metros) ');
  const time = readline.questionInt('Qual é o tempo que ele demorou? (em segundos) ');
  const velMedia = (distancy / time).toFixed(2);

  console.log(`Seu carro percorreu ${velMedia}km/h`);
}

module.exports = calcVel();