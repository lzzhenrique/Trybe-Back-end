// const readline = require('readline-sync');

// const scripts = [
//   {1: './imc' },
//   {2: './velocidade'},
//   {3: './sorteio'},
// ];

// const execScript = (choice) => {
//   const matchScript = scripts[choice];
//   const scriptFinded = Object.values(matchScript);
//   require(`${scriptFinded}`);
  
// };

// const helloMsg = () => {
//   const pickScript = readline.questionInt('Digite o número correspondente ao script que você quer rodar. \n 1- IMC \n 2- Velocidade \n 3- Sorteio \n ') - 1;

//   if(pickScript < 0 || pickScript >= 4) {
//     return console.log("Número errado, finalizando sessão.");
//   }
  
//   execScript(pickScript);
// };

// helloMsg();