const express = require('express');
const error = require('./middleware/error');
const bodyParser = require('body-parser');
const router = require('./controller/router');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use('/', router);

app.use(error);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));