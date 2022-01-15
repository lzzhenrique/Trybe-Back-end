// const readline = require('readline-sync');

// const scripts = [
//   { name: 'IMC', script:'./imc' },
//   { name: 'Velocidade', script:'./velocidade' },
//   { name: 'Sorteio', script:'./sorteio' },
// ];

// const execScript = (choice) => {
//   const matchScript = scripts[choice];
//   require(matchScript.script);
// };

// const helloMsg = () => {
//   let pickScript = scripts.map((script, index) => `${`${index + 1} - ${script.name} `}`);
//   pickScript.unshift('Digite o número correspondente ao script que você quer rodar:');
//   pickScript = pickScript.join('\n');

//   const message = readline.questionInt(pickScript) - 1;


//   if(message < 0 || message >= 4) {
//     return console.log("Número errado, finalizando sessão.");
//   };
  
//   execScript(message);
// };

// helloMsg();

console.log("%c YourText", "color:blue; font-weight:bold;");
