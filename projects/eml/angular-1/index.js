
var store = new Store('', {});
var model = new Model(store);

store.create({ client: 'Client A', client_priority: 1 });

angular.element(function() { angular.bootstrap(document, ['app']); });
