angular.module('MyApp')
  .controller('HomeCtrl', function($scope, $http, Test) {
    Test.getJson()
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
          //toastr.error(response.data.message, response.status);
        });
  });
