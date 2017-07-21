
var store = new Store('', {});
var model = new Model(store);

store.create({ client: 'Client A', client_priority: 1 });

var AppModule = function () {};
AppModule.annotations = [
  new vendor['@angular/core'].NgModule({
    imports: [
      vendor['@angular/platform-browser'].BrowserModule,
      vendor["@angular/forms"].FormsModule,
    ],
    declarations: [
      AppComponent,
    ],
    bootstrap: [
      AppComponent,
    ],
  })
];

document.addEventListener('DOMContentLoaded', function () {
  vendor['@angular/platform-browser-dynamic']
    .platformBrowserDynamic().bootstrapModule(AppModule);
});
