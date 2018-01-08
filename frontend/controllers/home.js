angular.module('MyApp')
  .controller('HomeCtrl', function($scope, $http, Result) {
    
    index();
    allParties();

    function index(){
      Result.getResultBundesland()
        .then(function(response) {
          $scope.bundesland = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });

      Result.getTotalResult()
        .then(function(response) {
          $scope.result = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
      
    }

    function allParties(){
      Result.getAllParties()
        .then(function(response) {
          $scope.parties = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    }

    $scope.selectBundesland = function(nr){
      Result.getWahlkreis(nr)
        .then(function(response) {
          $scope.wahlkreis = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });

      Result.getResultOneArea(nr)
        .then(function(response) {
          $scope.result = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });

      allParties();
    }

    $scope.selectWahlkreis = function(nr){
      Result.getResultOneArea(nr)
        .then(function(response) {
          $scope.result = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });

      allParties();
    }

  });
