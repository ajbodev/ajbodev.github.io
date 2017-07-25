
;__c(function(){/*!

# Engineering Mid Level - Servers - Rails

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

**app/models/features.rb**
```ruby
class Features < ActiveRecord::Base
  self.table_name = 'features'
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

[//]: # (@~|tech/engineering-mid-level/servers/rails|~@)

*/});
