// To debug a response call req.debug instead res.json()

function debug(req, res, next) {
  res.debug = (data) => {
    console.debug(req.originalUrl);
    console.debug(data);
    res.json(data);
  }
  next();
}

module.exports = {
  debug
};
