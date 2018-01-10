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
.controller('ResultController', ['$scope','Result', '$q', function($scope, Result, $q) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
    init();
    
    $scope.searchWahlkreis   = ''; 
    $scope.searchParty   = ''; 
    $scope.searchBundesland   = ''; 

    $scope.selectBundesland = function(nr){
        getWahlkreis(nr).then(function (response) {
            $scope.wahlkreis = response.data;
            getResultOneArea(nr).then(function (response) {
                $scope.result = response.data; 
                allParties().then(function (response) {
                    $scope.parties = response.data; 
                }, function (err) {
                    toastr.error(err.data.message, err.status);
                });
            }, function (err) {
                toastr.error(err.data.message, err.status);
            });
        }, function (err) {
            toastr.error(err.data.message, err.status);
        });
    }
  
    $scope.selectWahlkreis = function(nr){
        getResultOneArea(nr).then(function (response) {
            $scope.result = response.data; 
            allParties().then(function (response) {
                    $scope.parties = response.data; 
                }, function (err) {
                    toastr.error(err.data.message, err.status);
                });
            }, function (err) {
            toastr.error(err.data.message, err.status);
        });
    }

	function init(){
        allBundeslands().then(function (response) {
            $scope.bundesland = response.data; 

            allParties().then(function (response) {
                $scope.parties = response.data; 

                allResults().then(function (response) {
                    $scope.result = response.data; 
                  }, function (err) {
                    toastr.error(err.data.message, err.status);
                });

              }, function (err) {
                toastr.error(err.data.message, err.status);
            });

          }, function (err) {
            toastr.error(err.data.message, err.status);
        });

	};

    function allBundeslands(){
        var deferred = $q.defer();
        setTimeout(function() {
            Result.getResultBundesland()
                .then(function(response) {
                    deferred.resolve(response);
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                    deferred.reject(err)
                });
        }, 500);
        return deferred.promise;
    }

    function allParties(){
        var deferred = $q.defer();
        setTimeout(function() {
            Result.getAllParties()
            .then(function(response) {
                deferred.resolve(response);
            })
            .catch(function(err) {
                deferred.reject(err)
            });
        }, 500);
        return deferred.promise;
    }
    
    function allResults(){
        var deferred = $q.defer();
        setTimeout(function() {
            Result.getTotalResult()
                .then(function(response) {
                    deferred.resolve(response);
                })
                .catch(function(response) {
                    deferred.reject(err)
                });
        }, 500);
        return deferred.promise;
    }

    function getWahlkreis(nr){
        var deferred = $q.defer();
        setTimeout(function() {            
            Result.getWahlkreis(nr)
            .then(function(response) {
                deferred.resolve(response);
            })
            .catch(function(response) {
                deferred.reject(err)
            });
        }, 500);
        return deferred.promise;
    }

    function getResultOneArea(nr){
        var deferred = $q.defer();
        setTimeout(function() {            
            Result.getResultOneArea(nr)
            .then(function(response) {
                deferred.resolve(response);
            })
            .catch(function(response) {
                deferred.reject(err)
            });
        }, 500);
        return deferred.promise;
    }

    function chartist(){
        var data = {
            labels: $scope.parties,
            series: [20, 15, 40]
          };
          
          var options = {
            labelInterpolationFnc: function(value) {
              return value[0]
            }
          };
          
          var responsiveOptions = [
            ['screen and (min-width: 640px)', {
              chartPadding: 30,
              labelOffset: 100,
              labelDirection: 'explode',
              labelInterpolationFnc: function(value) {
                return value;
              }
            }],
            ['screen and (min-width: 1024px)', {
              labelOffset: 80,
              chartPadding: 20
            }]
          ];
          
          new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
    }
}]);