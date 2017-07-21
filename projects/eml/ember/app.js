
app.AppIndexComponent = Ember.Component.extend({
  props: {
    list: {
      items:             [],
    },
    create: {
      'title':           '',
      'description':     '',
      'client':          '',
      'client_priority': '',
      'target_date':     '',
      'product_area':    '',
    },
    update: {
      'id':              '',
      'title':           '',
      'description':     '',
      'client':          '',
      'client_priority': '',
      'target_date':     '',
      'product_area':    '',
    },
  },
  actions: {
    find: function(id) {
      var _this = this;
      _this.send('modal', 'update', 'show');
      model.find(id, function(item) {
        _this.set('props.update.id', item.id);
        _this.set('props.update.description', item.description);
        _this.set('props.update.client', item.client);
        _this.set('props.update.client_priority', item.client_priority);
        _this.set('props.update.target_date', item.target_date);
        _this.set('props.update.product_area', item.product_area);
        // ?
        $('#app__update__client').val(item.client);
        $('#app__update__product_area').val(item.product_area);
        // ?
      });
    },
    list: function() {
      var _this = this;
      model.list('', function(items) {
        _this.set('props.list.items', items);
        _this.rerender();
      });
    },
    create: function() {
      var _this = this;
      var attrs = {
        title:           this.get('props.create.title'),
        description:     this.get('props.create.description'),
        client:          this.get('props.create.client'),
        client_priority: this.get('props.create.client_priority'),
        target_date:     this.get('props.create.target_date'),
        product_area:    this.get('props.create.product_area'),
      };
      model.create(attrs, function() {
        _this.send('refresh');
      });
    },
    update: function() {
      var _this = this;
      var id    = this.get('props.update.id');
      var attrs = {
        title:           this.get('props.update.title'),
        description:     this.get('props.update.description'),
        client:          this.get('props.update.client'),
        client_priority: this.get('props.update.client_priority'),
        target_date:     this.get('props.update.target_date'),
        product_area:    this.get('props.update.product_area'),
      };
      model.update(id, attrs, function() {
        _this.send('refresh');
      });
    },
    destroy: function() {
      var _this = this;
      var id    = this.get('props.update.id');
      model.destroy(id, function() {
        _this.send('refresh');
      });
    },
    refresh: function() {
      var _this = this;
      this.send('list');
      this.send('modal', 'create', 'hide');
      this.send('modal', 'update', 'hide');
    },
    modal: function(form, display) {
      var _this = this;
      $('#app__'+form+'__modal').modal(display);
      //for (var i in this.props.create) this.props.create[i].set('');
      //for (var i in this.props.update) this.props.update[i].set('');
    },
  },
  _init: function() {
    var _this = this;
    this.send('refresh');
  }.on('init'),
});
