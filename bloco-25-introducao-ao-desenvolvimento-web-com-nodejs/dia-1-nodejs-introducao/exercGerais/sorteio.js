const readline = require('readline-sync');

const restart = () => {
  const restMsg = readline.question('Do you want to keep playing? Press Y to continue and any other key to not ');
  restMsg === 'Y' ? runGame() : console.log('Ok. Bye :)');
}

const finalResult = (resp, numb) => {
  
  if(resp === numb) {
    console.log(`Well done! You pick the correct number!!! The drawn number is ${numb} `);
    restart();
  };
  console.log(`Opss! You pick the wrong number :/ \nThe drawn number is ${numb} `);
  restart();
}

const runGame = () => {
  const randomNumb = Math.floor(Math.random() * 11);
  const response = readline.questionInt('What number do you think it will be? ');

  finalResult(response, randomNumb);
}

module.exports = runGame();