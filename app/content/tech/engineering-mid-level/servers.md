
;__c(function(){/*!

# Engineering Mid Level - The Server Layer



## Flask

* Notes
  * Flask (and Python in general) has a very minimalist feel, the most so out of these servers
  * Certain features though like  JSON encoding I could have done a better job (with more time). The resulting JSON hack makes the minimalist gains questionable - I should eventually resolve this
  * Among the servers, this is the only one that needs setting of an environment variable (FLASK_APP) before it can be run
  * Sometimes when testing, the server does not shutdown from the command line. The googled answer to this is to create a 'shutdown' route. This should be turned off in production
  * Presence of `__pycache__/` everywhere
  * Routing and controllers are in one file, unlike the other servers
  * For static files, /static (flask, spring-boot) = /public (rails, laravel)
* Files
  * server.py
  * main.py
  * app/controllers/features_controller.py
  * app/models/features.py

**app/controllers/features_controller.py**
```python
from flask               import render_template, request, Response
from main                import app, db
from app.models.features import Features

@app.route('/features')
def main_route():
    return render_template('features.html')

@app.route('/features/list', methods=['GET'])
def list():
    entities = []
    for entity in Features.query.all():  
        entities.append(entity.toJSON())
    json = '[' + ','.join(entities) + ']'
    return Response(json, mimetype='application/json')

@app.route('/features/find/<id>', methods=['GET'])
def find(id=None):
    entity = Features.query.get(id)
    json   = entity.toJSON()
    return Response(json, mimetype='application/json')

@app.route('/features/create', methods=['POST'])
def create():
    entity = Features(
      request.form.get('title'),
      request.form.get('description'),
      request.form.get('client'),
      request.form.get('client_priority'),
      request.form.get('target_date'),
      request.form.get('product_area'),
    )
    db.session.add(entity)
    db.session.commit()
    return 'Created'

@app.route('/features/update/<id>', methods=['POST'])
def update(id):
    entity = Features.query.get(id)
    entity.title           = request.form.get('title', entity.title)
    entity.description     = request.form.get('description', entity.description)
    entity.client          = request.form.get('client', entity.client)
    entity.client_priority = request.form.get('client_priority', entity.client_priority)
    entity.target_date     = request.form.get('target_date', entity.target_date)
    entity.product_area    = request.form.get('product_area', entity.product_area)
    db.session.commit()
    return 'Updated'

@app.route('/features/destroy/<id>', methods=['POST'])
def delete(id):
    entity = Features.query.get(id)
    db.session.delete(entity)
    db.session.commit()
    return 'Destroyed'
```

**app/models/features.py**
```python
from main import db

class Features(db.Model):
    __tablename__ = 'features'
    id              = db.Column(db.Integer, primary_key=True)
    title           = db.Column(db.String)
    description     = db.Column(db.String)
    client          = db.Column(db.String)
    client_priority = db.Column(db.String)
    target_date     = db.Column(db.String)
    product_area    = db.Column(db.String)

    def __init__(self, 
        title, description, client, client_priority, target_date, product_area
        ):
        self.title           = title
        self.description     = description
        self.client          = client
        self.client_priority = client_priority
        self.target_date     = target_date
        self.product_area    = product_area

    def toJSON(self):
        json = ''
        json += '\"title\": \"%s\"'           % self.title + ','
        json += '\"description\": \"%s\"'     % self.description.replace('\n', '\\n') + ','
        json += '\"client\": \"%s\"'          % self.client + ','
        json += '\"client_priority\": \"%s\"' % self.client_priority + ','
        json += '\"target_date\": \"%s\"'     % self.target_date + ','
        json += '\"product_area\": \"%s\"'    % self.product_area + ','
        json += '\"id\": \"%d\"'              % self.id
        return '{' + json  + '}'
```

**main.py**
```python
from flask            import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/custom'
db = SQLAlchemy(app)

from app.controllers.features_controller import *
```

**main.py**
```python
from flask            import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/custom'
db = SQLAlchemy(app)

from app.controllers.features_controller import *
```

## Laravel

* Notes
  * //
* Files
  * //

**app/Http/Controllers/FeaturesController.php**
```php
<?php 

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use App\Http\Controllers\Controller;
use App\Models\Features;

class FeaturesController extends Controller {

    public function __construct()
    {
        #$this->middleware('auth');
    }

    public function index()
    {
        return view('features', ['url' => url('/')]);
    }

    public function find($id)
    {
        $entity = Features::find($id);
        return json_encode($entity);
    }

    public function list()
    {
        $entities = Features::all();
        return json_encode($entities);
    }

    public function create()
    {
        $entity                  = new Features;
        $entity->title           = Request::input('title');
        $entity->description     = Request::input('description');
        $entity->client          = Request::input('client');
        $entity->client_priority = Request::input('client_priority');
        $entity->target_date     = Request::input('target_date');
        $entity->product_area    = Request::input('product_area');
        $entity->save();
        return 'Created';
    }

    public function update($id)
    {
        $entity                  = Features::find($id);
        $entity->title           = Request::input('title')           ?: $entity->title;
        $entity->description     = Request::input('description')     ?: $entity->description;
        $entity->client          = Request::input('client')          ?: $entity->client;
        $entity->client_priority = Request::input('client_priority') ?: $entity->client_priority;
        $entity->target_date     = Request::input('target_date')     ?: $entity->target_date;
        $entity->product_area    = Request::input('product_area')    ?: $entity->product_area;
        $entity->save();
        return 'Updated';
    }

    public function destroy($id)
    {
        $entity = Features::find($id);
        $entity->delete();
        return 'Destroyed';
    }

}
```

**routes/web.php**
```php
<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('features',               'FeaturesController@index');
Route::get('features/list',          'FeaturesController@list');
Route::get('features/find/{id}',     'FeaturesController@find');
Route::post('features/create',       'FeaturesController@create');
Route::post('features/update/{id}',  'FeaturesController@update');
Route::post('features/destroy/{id}', 'FeaturesController@destroy');

```

**app/Models/Features.php**
```php
<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Features extends Model {

	protected $connection  = 'mysql';
	protected $table       = 'features';
	public    $timestamps  = false;

}
```

## Express

* Notes
  * //
* Files
  * //

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

## Rails

* Notes
  * //
* Files
  * //

**app/controllers/features_controller.rb**
```ruby
class FeaturesController < ApplicationController
  def index
    render file: 'features.html'
  end
  def list
    entities = Features.all
    render json: entities
  end
  def find
    entity = Features.find_by(id: params[:id])
    render json: entity
  end
  def create
    entity = Features.create(
      title:           params[:title],
      description:     params[:description],
      client:          params[:client],
      client_priority: params[:client_priority],
      target_date:     params[:target_date],
      product_area:    params[:product_area],
    )
    render :text => 'Created'
  end
  def update
    entity = Features.find_by(id: params[:id])
    entity.title           = params[:title]           || entity.title
    entity.description     = params[:description]     || entity.description
    entity.client          = params[:client]          || entity.client
    entity.client_priority = params[:client_priority] || entity.client_priority
    entity.target_date     = params[:target_date]     || entity.target_date
    entity.product_area    = params[:product_area]    || entity.product_area
    entity.save
    render :text => 'Updated'
  end
  def destroy
    entity = Features.find_by(id: params[:id])
    entity.destroy
    render :text => 'Destroyed'
  end
end
```

**config/routes.rb**
```ruby
Rails.application.routes.draw do

  get  '/features',             to: 'features#index'
  get  '/features/list',        to: 'features#list'
  get  '/features/find/:id',    to: 'features#find'
  post '/features/create',      to: 'features#create'
  post '/features/update/:id',  to: 'features#update'
  post '/features/destroy/:id', to: 'features#destroy'
  
end
```

## Spring Boot

* Notes
  * //
* Files
  * //

**src/main/java/app/controllers/FeaturesController.java**
```java
package app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.StringJoiner;

import app.models.Features;
import app.repositories.FeaturesRepository;

@Controller
@RequestMapping(path="/features")
public class FeaturesController {
	@Autowired

	private FeaturesRepository repository;

  @RequestMapping(value="", method=RequestMethod.GET)
  public String index() {
    return "features";
  }

  @RequestMapping(value="/find/{id}", produces={"application/json"}, method=RequestMethod.GET)
  public @ResponseBody String find(@PathVariable String id) {
    Features entity = repository.findOne(Long.parseLong(id));
    return entity.toJSON();
  }

  @RequestMapping(value="/list", produces={"application/json"}, method=RequestMethod.GET)
	public @ResponseBody String list() {
    StringJoiner entities = new StringJoiner(",");
    for (Features entity : repository.findAll()) {
        entities.add(entity.toJSON());
    }
    return "[" + entities.toString() + "]";
	}

  @RequestMapping(value="/create", method=RequestMethod.POST)
  public @ResponseBody String create(
    String title,
    String description,
    String client,
    String client_priority,
    String target_date,
    String product_area
    ) {
    Features entity = new Features();
    entity.setTitle(title);
    entity.setDescription(description);
    entity.setClient(client);
    entity.setClientPriority(client_priority);
    entity.setTargetDate(target_date);
    entity.setProductArea(product_area);
    repository.save(entity);
    return "Created";
  }

  @RequestMapping(value="/update/{id}", method=RequestMethod.POST)
  public @ResponseBody String update(
    @PathVariable String id, 
    String title,
    String description,
    String client,
    String client_priority,
    String target_date,
    String product_area
    ) {
    Features entity = repository.findOne(Long.parseLong(id));
    entity.setTitle(title);
    entity.setDescription(description);
    entity.setClient(client);
    entity.setClientPriority(client_priority);
    entity.setTargetDate(target_date);
    entity.setProductArea(product_area);
    repository.save(entity);
    return "Updated";
  }

  @RequestMapping(value="/destroy/{id}", method=RequestMethod.POST)
  public @ResponseBody String destroy(@PathVariable String id) {
    repository.delete(Long.parseLong(id));
    return "Destroyed";
  }

}
```

**src/main/java/app/models/Features.java**
```java
package app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Features {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String title;
    private String description;
    private String client;
    private String client_priority;
    private String target_date;
    private String product_area;

    public Long getId() {
      return id;
    }
    public void setId(Long id) {
      this.id = id;
    }

    public String getTitle() {
      return title;
    }
    public void setTitle(String title) {
      if (title != null) this.title = title;
    }
    
    public String getDescription() {
      return description;
    }
    public void setDescription(String description) {
      if (description != null) this.description = description;
    }
    
    public String getClient() {
      return client;
    }
    public void setClient(String client) {
      if (client != null) this.client = client;
    }
    
    public String getClientPriority() {
      return client_priority;
    }
    public void setClientPriority(String client_priority) {
      if (client_priority != null) this.client_priority = client_priority;
    }
    
    public String getTargetDate() {
      return target_date;
    }
    public void setTargetDate(String target_date) {
      if (target_date != null) this.target_date = target_date;
    }
    
    public String getProductArea() {
      return product_area;
    }
    public void setProductArea(String product_area) {
      if (product_area != null) this.product_area = product_area;
    }

    public String toJSON() {
        return String.format("{" + 
            "\"title\":\"%s\"," + 
            "\"description\":\"%s\"," + 
            "\"client\":\"%s\"," + 
            "\"client_priority\":\"%s\"," + 
            "\"target_date\":\"%s\"," + 
            "\"product_area\":\"%s\"," + 
            "\"id\":%d}",
            title,
            (description != null) ? description.replaceAll("(\\r|\\n|\\r\\n)+", "\\\\n") : "",
            client,
            client_priority,
            target_date,
            product_area,
            id);
    }

}
```

**src/main/java/app/models/FeaturesRepository.java**
```java
package app.repositories;

import org.springframework.data.repository.CrudRepository;

import app.models.Features;

public interface FeaturesRepository extends CrudRepository<Features, Long> {

}
```

## ASP.NET Core MVC

* Notes
  * //
* Files
  * //

**Controllers/FeaturesController.cs**
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using app.Models;

namespace app.Controllers
{
    public class FeaturesController : Controller
    {
        private FeaturesContext context;

        public FeaturesController(FeaturesContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View("~/Views/Features.cshtml");
        }
        
        [HttpGet]
        public IActionResult List()
        {
            return Content(JsonConvert.SerializeObject(this.context.Features.ToList()));
        }
        
        [HttpGet]
        public IActionResult Find(long id)
        {
            Features entity = this.context.Features.Find(id);
            return Content(JsonConvert.SerializeObject(entity));
        }
        
        [HttpPost]
        public IActionResult Create(
            [Bind(@"
              title,
              description,
              client,
              client_priority,
              target_date,
              product_area
            ")]
            Features entity)
        {
            this.context.Features.Add(entity);
            this.context.SaveChanges();
            return Content("Created");
        }
        
        [HttpPost]
        public IActionResult Update(long id, 
            [Bind(@"
              id,
              title,
              description,
              client,
              client_priority,
              target_date,
              product_area
            ")]
            Features entity)
        {
            this.context.Update(entity);
            this.context.SaveChanges();
            return Content("Updated");
        }
        
        [HttpPost]
        public IActionResult Destroy(long id)
        {
            Features entity = this.context.Features.Find(id);
            this.context.Features.Remove(entity);
            this.context.SaveChanges();
            return Content("Destroyed");
        }
    }
}
```

**Models/Features.cs**
```csharp
using Microsoft.EntityFrameworkCore;

namespace app.Models
{
    public class Features
    {
        public long   id              { get; set; }
        public string title           { get; set; }
        public string description     { get; set; }
        public string client          { get; set; }
        public string client_priority { get; set; }
        public string target_date     { get; set; }
        public string product_area    { get; set; }
    }
    public class FeaturesContext : DbContext
    {
        public FeaturesContext(DbContextOptions<FeaturesContext> options)
            : base(options)
        {
        }

        public DbSet<Features> Features { get; set; }

    }
}
```

[//]: # (@~|tech/engineering-mid-level/servers|~@)

*/});
