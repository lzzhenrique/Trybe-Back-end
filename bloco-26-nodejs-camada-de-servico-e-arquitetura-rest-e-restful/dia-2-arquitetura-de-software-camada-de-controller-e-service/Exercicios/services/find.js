const model = require('../model');

module.exports = async (cep) => {
  const findCEP = await model.find(cep);

  if (!findCEP) return null;

  return model.find(cep);
};
