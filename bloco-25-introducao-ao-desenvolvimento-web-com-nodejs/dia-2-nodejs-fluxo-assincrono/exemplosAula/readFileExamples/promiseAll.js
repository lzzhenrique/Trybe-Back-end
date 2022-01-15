const fs = require('fs').promises;

const text1 = ('../ahblablu.txt');
const text2 = ('../ahblablu1.txt');
const text3 = ('../ahblablu2.txt');
const text4 = ('../ahblablu3.txt');


Promise.all([
  fs.readFile(text1, 'utf-8'),
  fs.readFile(text2, 'utf-8'),
  fs.readFile(text3, 'utf-8'),
  fs.readFile(text4, 'utf-8'),
])

  .then(([L, U, I, Z]) => {
    const fileSizeSum = L.byteLength + U.byteLength + I.byteLength + Z.byteLength;
    console.log(`${L}${U}${I}${Z}`);
    console.log(`Lidos 4 arquivos, juntos, esses arquivos totalizam ${fileSizeSum} bytes`);
  })
  
  .catch((err) => {
    console.error(`Xabu encontrado ao ler arquivos: ${err.message}`);
  });