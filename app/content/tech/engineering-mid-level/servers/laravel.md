
;__c(function(){/*!

# Engineering Mid Level - Servers - Laravel

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

[//]: # (@~|tech/engineering-mid-level/servers/laravel|~@)

*/});
