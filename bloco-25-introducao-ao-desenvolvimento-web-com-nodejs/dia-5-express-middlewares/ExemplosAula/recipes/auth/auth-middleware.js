const validUser = [
  {username: 'MestreCuca', password: 'hmmmmmmBolinhoDeFuba'},
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if(!username || !password) {
    return res.status(401).json({
      message: 'Username or password can`t be blank!'
    });
  };

  const foundUser = validUsers.find((user) => {
    return user.username === username
  });

  if(!foundUser) return res.status(401).json({
    message: 'Invalid credentials!'
  });

  if(username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({
      message: 'Invalid credentials!'
    });
  };

  next ();
};

module.exports = authMiddleware;