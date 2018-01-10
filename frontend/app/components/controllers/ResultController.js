// ResultController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('myApp.result', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/result', {
		controller: 'ResultController',
		templateUrl: 'components/views/resultView.html'
	});
}])

// Controller definition for this module
.controller('ResultController', ['$scope','Result', function($scope, Result) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();
    allParties();

    $scope.message = "Hello About!";
    $scope.searchWahlkreis   = ''; 
    $scope.searchParty   = ''; 
    $scope.searchBundesland   = ''; 

	function init(){
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
	};
    
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
}]);