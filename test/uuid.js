var specify = require('specify')
  , uuid    = require('../middleware/uuid')
  ;

specify("hello#uuid", function (assert) {
  var req = {}, res = {headers: {}};
  res.setHeader = function (k, v) { this.headers[k] = v; };
  res.emit      = function () {};
  uuid(req,res);
  assert.equal(req._uuid, res._uuid);
  assert.equal(res.headers["x-api-uuid"], req._uuid);
});

specify.run();