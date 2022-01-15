const readline = require('readline-sync');

let sitResult = "";

const sitIMC = (IMC) => {
  if (IMC >= 40.00 ) {
    "Obesidade graus III e IV"
  } else if (IMC >= 35.00) {
    sitResult = "Obesidade grau II"
  } else if (IMC >= 30.00) {
    sitResult = "Obesidade grau I "
  } else if (IMC >= 25.00) {
    sitResult = "Acima do peso (sobrepeso)"
  } else if (IMC >= 18.50) {
    sitResult = "Peso normal"
  } else {
    sitResult = "Abaixo do peso (magreza)"
  };
};

const calcIMC = () => {
  const name = readline.question('Qual é o seu nome? ');
  const age = readline.questionInt('Qual é a sua idade? ');
  const weight = readline.questionFloat('Qual é o seu peso? (em kg) ');
  const height = readline.questionInt('Qual é a sua altura? (em cm) ');
  const resIMC = (weight / Math.pow(height / 100, 2)).toFixed(2);

  sitIMC(resIMC);

  console.log(`Hey ${name}! You have ${age} years, and your IMC is ${resIMC}, your IMC situation is ${sitResult}  \nHave a good day! :`);
};

module.exports = calcIMC();