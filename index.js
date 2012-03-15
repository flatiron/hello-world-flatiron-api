var flatiron  = require('flatiron')
  , app       = flatiron.app
  ;

app.use(flatiron.plugins.http, 
{ "before" : [ require('./middleware/uuid') ]
, "onError": function not_found(err) {
    this.res.json(404, { "error": "not_found" });
  }
});

app.router.get('/', function () {
  this.res.json({"hello": "world"});
});

app.start(3000, function () { console.log({"flatiron": "ok"}); });