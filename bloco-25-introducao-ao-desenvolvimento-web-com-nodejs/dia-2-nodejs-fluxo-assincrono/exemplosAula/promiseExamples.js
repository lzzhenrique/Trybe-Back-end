// // Exemplo de funcao sem Promise.
// const calcularDivisao = (num1, num2) => {
//   if(num2 === 0) {
//     throw new Error('Nao eh possivel fazer divisao por 0. Paspaio.');
//   };
//   const result = num1 / num2;
 
//   return result;
// };

// try{
//   const resultado = calcularDivisao(2, 1);
//   console.log("resultado: %s",resultado);
// } catch(e) {
//   console.log(e.message);
// };



// // Exemplo de funcao com Promise.
const calcularMultiplicacao = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if(num1 === 5) throw reject(new Error("Nao queremos multiplos de 5", 'aa'));

    const result = num1 * num2;
    resolve(result);
  });

  return promise;
};

// Usando de callbacks e promises com uma funcao nativa do node (fs).
const fs = require('fs');
const text = './ahblablu.txt';

function readFilePromise (file) {
  return new Promise((resolve, reject) => {

    fs.readFile(file, (err,content) => {
      if(err) {
        return reject(err);
      };
      resolve(content);
    });

  });
};

readFilePromise(text)
.then((content) => {
  console.log(`Arquivo lido com sucesso. O arquivo tem ${content.byteLength} bytes de tamanho`);
  return calcularMultiplicacao(6, 50);
})
.then((result) => console.log(`O resultado dessa multiplicacao foi: ${result}`))

.catch((err) => {
  console.error(`Erro ao executar um dos scripts. ${err.message}`);
});