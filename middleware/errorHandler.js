const errorHandler = (err, req, res, next) => {
  console.log("came here", err);
};

module.exports = errorHandler;
