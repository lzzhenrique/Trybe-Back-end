const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/userRoutes');
const PORT = 3200;

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log('cheguei no index');
app.use('/user', userRouter); 

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));