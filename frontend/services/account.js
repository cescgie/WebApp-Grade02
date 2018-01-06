angular.module('MyApp')
  .factory('Account', function($http) {
    return {
      getProfile: function() {
        return $http.get('http://localhost:5000/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('http://localhost:5000/api/me', profileData);
      }
    };
  });