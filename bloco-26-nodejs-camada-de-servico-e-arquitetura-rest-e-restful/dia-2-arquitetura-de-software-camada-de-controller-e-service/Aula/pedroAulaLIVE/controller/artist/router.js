const express = require('express');
const listAll = require('./listAll');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.get('/', listAll);
router.post('/', create);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;