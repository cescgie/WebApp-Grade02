// ResultController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('myApp.result', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/', {
		controller: 'ResultController',
		templateUrl: 'components/views/resultView.html'
	});
}])

// Controller definition for this module
.controller('ResultController', ['$scope','Result', '$q','usSpinnerService', function($scope, Result, $q, usSpinnerService) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
    init();

    $scope.searchWahlkreis   = ''; 
    $scope.searchParty   = ''; 
    $scope.searchBundesland   = ''; 

    $scope.selectBundesland = function(nr){
        usSpinnerService.spin('spinner-1');
        getWahlkreis(nr).then(function (response) {
            $scope.wahlkreis = response.data;
            getResultOneArea(nr).then(function (response) {
                $scope.result = response.data; 
                allParties().then(function (response) {
                    $scope.parties = response.data; 
                    
                    var chart_data = chartData($scope.parties, $scope.result);
                    chartli(chart_data);

                    usSpinnerService.stop('spinner-1');
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
        usSpinnerService.spin('spinner-1');

        getResultOneArea(nr).then(function (response) {
            $scope.result = response.data; 
            allParties().then(function (response) {
                    $scope.parties = response.data; 

                    var chart_data = chartData($scope.parties, $scope.result);
                    chartli(chart_data);

                    usSpinnerService.stop('spinner-1');
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

                    var chart_data = chartData($scope.parties, $scope.result);
                    chartli(chart_data);

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
    
    function chartData(parties, result){
        var data = [];
        
        for (var i = 0; i < parties.length; i++) {
            var element = parties[i];
            if(result[element]!==0){
                data.push({'name': element, 'value': result[element]});
            }
        }
        return data;
    }

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

    function chartli(chartdata){
        var chartliexample1 = echarts.init(document.getElementById('pieChart1'));

        var option = {
            backgroundColor: '#FFFFFF',

            title: {
                text: 'Bundestagswahl 2017',
                subtext: '',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br />{b} : {c}"
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            color: ["#84c4ec", "#EF476F", "#699cbc", "#FFD166", "#06D6A0", "#4f758d",  '#344e5e', '#1a272f', "#118AB2",  '#000000', '#8d5f1', "#073B4C"],
            calculable: true,
            series: [
                {
                    name: 'Bundestagswahl 2017',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '60%'],    
                    data: chartdata
                }
            ]
        };

        chartliexample1.setOption(option);
    }
}]);