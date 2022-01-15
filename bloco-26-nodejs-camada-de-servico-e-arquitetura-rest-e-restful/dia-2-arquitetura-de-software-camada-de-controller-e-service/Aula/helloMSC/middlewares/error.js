module.exports = (err, req, res, _next) => {
  if(err.isJoi) {
    return res.status(400)
      .json({
        error: {
          message: err.details[0].message
        }
      });
  }

  const statusByerrorCode = {
    notFound: 404,
    alreadyExists: 409,
  };

  const satus = statusByErrorCode[err.code] || 500;

  res.status(status).json({
    error: {
      message: err.message
    }
  });
}