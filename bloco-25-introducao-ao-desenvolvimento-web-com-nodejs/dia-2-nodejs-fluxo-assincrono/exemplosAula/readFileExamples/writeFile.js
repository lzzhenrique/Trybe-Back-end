const fs = require('fs').promises;
const text = ('../ahblablu.txt');
const newText = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
const newTextA = 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCC';

fs.writeFile(text, newText)
  .then((result) => {
    console.log('Arquivo reescrito com sucesso!');
  })
  .catch((err) => {
    console.log(`Xabu detectado: ${err.message}`)
  });

 const write = async () => {
  try {
    await fs.writeFile(text, newTextA);
    console.log('Arquivo RE-reescrito com sucesso!');
  } catch (err) {
    console.log('Xabu detectado: ${err.message}');
  };
};

write();