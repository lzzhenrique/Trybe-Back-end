const router = require('express').Router();

const {
  validEmail,
  validPassword,
  validUserName,
} = require('../middlewares/auth');

router.post(
  '/register',
  validEmail,
  validPassword,
  validUserName,
  (_req, res) => res.status(201).json({ message: 'user created' }),
);

router.post(
  '/login',
  validUserName,
  validPassword,
  (_req, res) => res.status(201).json({ token: '86567349784e' }),
)
module.exports = router;
