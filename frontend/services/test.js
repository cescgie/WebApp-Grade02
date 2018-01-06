angular.module('MyApp')
  .factory('Test', function($http) {
    return {
      getJson: function() {
        return $http.get('http://localhost:5000/api/json');
      }
    };
  });