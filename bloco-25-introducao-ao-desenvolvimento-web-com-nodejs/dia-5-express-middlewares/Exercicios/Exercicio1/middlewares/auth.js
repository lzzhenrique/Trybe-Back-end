const regexUser =  /^([a-zA-Z0-9_-]){4,8}$/;
const MIN_PASSWORD = 3;
const MAX_PASSWORD = 8;


const validEmail =(req, res, next) => {
  console.log('cheguei email');
  try {
    const { email } = req.body;
    if(
      !email ||
      !email.includes('@') ||
      !email.includes('.com')
    ) {
      return res.status(400).json({message:'invalid data, EMAIL'});
    };
    next();
  }catch(err) {
    return res.status(500).json({message: `${err.message}`});
  };
};

const validPassword =(req, res, next) => {
  console.log('cheguei senha');
  try {
    const { password } = req.body;
    if(password.length < MIN_PASSWORD || password.length > MAX_PASSWORD ) {
      return res.status(400).json({message:'invalid data, PASSWORD'});
    };
    next();
  }catch(err) {
    return res.status(500).json({message: `${err.message}, PASSWORD`});
  };
};

const validUserName =(req, res, next) => {
  console.log('cheguei user');
  try {
    const { username } = req.body;
    if(regexUser.test(username) === false) {
      return res.status(400).json({message:'invalid data, USERNAME'});
    };
    next();
  }catch(err) {
    return res.status(500).json({message: `${err.message}`});
  };
};

module.exports = {
  validUserName,
  validEmail,
  validPassword,
};

