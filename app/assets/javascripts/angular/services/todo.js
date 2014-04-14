app.factory('todo', ['$resource', function($resource) {
  function todo() {
    this.service = $resource('/api/todo/:Id', {Id: '@id'});
  };
}]);