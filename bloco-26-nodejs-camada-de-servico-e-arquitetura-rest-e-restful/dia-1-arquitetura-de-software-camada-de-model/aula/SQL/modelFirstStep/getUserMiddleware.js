const userModel = require('./userModel');

const getUserMiddleware = async (req, res, next) => {
  const { username } = req.body;

  const user = await userModel.getUser(username);

  if(!user) {
    return res.status(404).json({
      message: 'user não encontrado'
    });
  };

  return res.status(200).json(user);
};