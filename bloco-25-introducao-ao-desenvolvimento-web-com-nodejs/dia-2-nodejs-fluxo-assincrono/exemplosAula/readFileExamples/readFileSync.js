const fs = require('fs');
const fsPromise = require('fs').promises;


const text = ('../ahblablu.txt');

//Promise
fsPromise.readFile(text, 'utf-8')
  .then((data) => {
    console.log(`Async, promise => Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  });

// Callback Assincrona
fs.readFile(text, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${text}\n Erro: ${err}`);
    process.exit(1);
  };

  console.log(`Async, callback => Conteúdo do arquivo: ${data}`);
});

// Callback sincrona
try {
  const data = fs.readFileSync(text, 'utf8');
  console.log(`Sync, callbacks => Conteúdo do arquivo: ${data}`);
} catch(e) {
  console.log(`Erro ao ler o arquivo: ${e.path}`);
};
