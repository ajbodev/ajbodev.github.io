
var store = new Store('', {});
var model = new Model(store);

store.create({ client: 'Client A', client_priority: 1 });

m.mount(document.getElementById('app'), app);
