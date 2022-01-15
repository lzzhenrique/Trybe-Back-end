module.exports = async (_req, res, next) => {
  try {
    return res.status(200).send({message: 'pong!'});
  } catch(err) {
    next(err);
  };
};