
var store = new Store('', {});
var model = new Model(store);

store.create({ client: 'Client A', client_priority: 1 });

app.Router.map(function() { this.route('index', {path: '/'}); });