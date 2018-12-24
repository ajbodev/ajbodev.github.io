
;__c(function(){/*!

# Engineering Mid Level - Servers - Flask

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

[//]: # (@~|tech/engineering-mid-level/servers/flask|~@)

*/});
