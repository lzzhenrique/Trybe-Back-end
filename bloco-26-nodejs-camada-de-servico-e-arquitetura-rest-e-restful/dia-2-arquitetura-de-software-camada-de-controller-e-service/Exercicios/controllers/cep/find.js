const service = require('../../service');

module.exports = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const validCEP = /\d{5}-?\d{3}/
    
    if (!validCEP.test(cep)) return res.status(400).send({"code": "invalidData", "message": "CEP inválido"});

    const CEP = await service.find(cep);

    if(!CEP) return res.status(404).send({"code": "notFound", "message": "CEP não encontrado"});

    return res.status(200).send(CEP);
  } catch(err) {
    next(err);
  };
};