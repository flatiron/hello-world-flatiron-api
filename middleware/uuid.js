module.exports = function uuidMW(req, res) {
  var uuid = (~~(Math.random() * 1e9)).toString(36) + Date.now();
  res.setHeader("x-api-uuid", uuid);
  res._uuid = uuid;
  req._uuid = uuid;
  res.emit("next");
};