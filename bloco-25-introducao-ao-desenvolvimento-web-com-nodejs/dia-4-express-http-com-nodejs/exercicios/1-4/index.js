const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//1
const getPing = (req, res) => {
  return res.json({message: 'pong'});
};
app.get('/ping', getPing);

//2
const sayHello = (req, res) => {
  const { name } = req.body;
  res.status(200).json({
    message: `Hello, ${name}!`
  });
};
app.post('/hello', sayHello);

//3
const sayGreetings = (req, res) => {
  const { name, age } = req.body;

  if(age > 18) {
    return res.status(200).json({
      message: `Hello, ${name}!`
    });  
  };

  return res.status(401).json({
    message: 'Unauthorized'
  });
};
app.post('/greetings', sayGreetings);


//4

const sayNameAndAge = (req, res) => {
  const { name, age } = req.body;

  return res.status(200).json({
    message: `Seu nome é ${name} e voce tem ${age} anos de idade`
  });
};
app.put('/users/:name/:age', sayNameAndAge);

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});