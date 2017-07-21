
var store = new Store('', {});
var model = new Model(store);
var app   = new App(model);

store.create({ client: 'Client A', client_priority: 1 });
app.init();
