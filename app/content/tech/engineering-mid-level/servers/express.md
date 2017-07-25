
;__c(function(){/*!

# Engineering Mid Level - Servers - Express

**app/controllers/features-controller.js**
```javascript
var path     = require('path');
var root     = require('app-root-path');

var Features = require('app/models/features');
var app      = require('app/lib/server/express');

app.get('/features', function (req, res) {
  res.sendFile(path.join(root + '/views/features.html'));
});

app.get('/features/list', function (req, res) {
  Features.fetchAll()
  .then(function(collection) {
    var result = collection.serialize();
    res.send(result);
  });
});

app.get('/features/find/:id', function (req, res) {
  Features.where({ id: req.params.id })
  .fetch()
  .then(function(model) {
    var result = model.serialize();
    res.send(result);
  });
});

app.post('/features/create', function (req, res) {
  Features.forge({
    title:           req.body.title,
    description:     req.body.description,
    client:          req.body.client,
    client_priority: req.body.client_priority,
    target_date:     req.body.target_date,
    product_area:    req.body.product_area,
  })
  .save()
  .then(function() {
    res.send('Created');
  });
});

app.post('/features/update/:id', function (req, res) {
  Features.forge({
    id: req.params.id,
  })
  .fetch({require: true})
  .then(function (entity) {
    var previous = entity.serialize();
    entity.save({
      title:           req.body.title,
      description:     req.body.description,
      client:          req.body.client,
      client_priority: req.body.client_priority,
      target_date:     req.body.target_date,
      product_area:    req.body.product_area,
    })
    .then(function() {
      res.send('Updated');
    })
  });
});

app.post('/features/destroy/:id', function (req, res) {
  Features.forge({
    id: req.params.id,
  })
  .fetch({require: true})
  .then(function (entity) {
    entity.destroy()
    .then(function() {
      res.send('Destroyed');
    })
  });
});
```

**app/models/features.js**
```javascript
var bookshelf = require('app/lib/db/bookshelf');

var Features = bookshelf.Model.extend({
  tableName: 'features'
});

module.exports = Features;
```

**app/lib/db/bookshelf.js**
```javascript
var knex = require('knex');

var bookshelf = null;

if (!bookshelf) bookshelf = require('bookshelf')(knex({
  client: 'mysql',
  connection: {
    host:     '127.0.0.1',
    user:     'root',
    password: '',
    database: 'custom',
    charset:  'utf8',
  },
}));

module.exports = bookshelf;
```

**app/lib/server/express.js**
```javascript

var express    = require('express');
var bodyParser = require('body-parser');

var app = null;

if (!app) {
  app = express();
  
  app.use(bodyParser.urlencoded({extended: false}));
  app.set('views', 'views');
  app.set('view engine', 'html');
  app.use('/public', express.static('public'));
}

module.exports = app;
```

**server.js**
```javascript

require('app-module-path').addPath(__dirname);

require('app/controllers/features-controller');

var app = require('app/lib/server/express');

app.listen(3000, function() {
  console.log('Listening on port 3000!')
});
```

[//]: # (@~|tech/engineering-mid-level/servers/express|~@)

*/});
