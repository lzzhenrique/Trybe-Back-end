const express = require('express');

const app = express(); //1

const handleHelloWorldRequest = (req, res) => {
  res.status(200).send('Hello World! :), i wanna go out, because i wanna fly high'); //4
  console.log(res)
};

app.get('/hello', handleHelloWorldRequest); //2

app.listen(3001, () => {
  console.log('Aplicacão ouvindo na porta 3001');
}); //3
