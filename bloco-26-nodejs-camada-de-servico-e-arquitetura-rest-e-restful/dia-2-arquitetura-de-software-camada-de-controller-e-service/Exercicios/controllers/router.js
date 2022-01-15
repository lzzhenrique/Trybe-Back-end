const express = require('express');
const ping = require('./cep/ping');
const find = require('./cep/find')

const router = express.Router();

router.get('/ping', ping);
router.get('/cep/:cep', find);

module.exports = router;