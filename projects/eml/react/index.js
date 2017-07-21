
var h = React.createElement;

var store = new Store('', {});
var model = new Model(store);

store.create({ client: 'Client A', client_priority: 1 });

ReactDOM.render(h(App), document.getElementById('app'));
