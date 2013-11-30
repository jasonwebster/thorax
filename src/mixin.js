Thorax.Mixins = {};

_.extend(Thorax.View, {
  mixin: function(name) {
    var _this = this;
    _.each(arguments, function(name) {
      Thorax.Mixins[name](_this);
    });
  },
  registerMixin: function(name, callback, methods) {
    Thorax.Mixins[name] = function(obj) {
      var isInstance = !!obj.cid;
      if (methods) {
        _.extend(isInstance ? obj : obj.prototype, methods);
      }
      if (isInstance) {
        callback.call(obj);
      } else {
        obj.on('configure', callback);
      }
    };
  }
});

Thorax.View.prototype.mixin = function(name) {
  var _this = this;
  _.each(arguments, function(name) {
    Thorax.Mixins[name](_this);
  });
};
