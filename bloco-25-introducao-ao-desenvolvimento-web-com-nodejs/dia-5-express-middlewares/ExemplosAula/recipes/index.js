const bodyParser = require('body-parser');
const express = require('express');

const authMiddleware = require('./auth-middleware');

router.use(authMiddleware);

const app = express();
app.use(bodyParser.json());

app.get('/open', (req, res) => {
  res.send('open!');
});

app.get('/fechado', authMiddleware, function (req, res) {
  res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });
