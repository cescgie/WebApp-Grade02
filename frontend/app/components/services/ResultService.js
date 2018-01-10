// AboutController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('myApp.result')
.factory('Result', function($http) {
    return {
        getTotalResult: function() {
            return $http.get('http://localhost:5000/api/result/all');
        },
        getResultBundesland: function() {
            return $http.get('http://localhost:5000/api/result/bundesland');
        },
        getAllParties: function() {
            return $http.get('http://localhost:5000/api/parties/all');
        },
        getWahlkreis: function(id) {
            return $http.get('http://localhost:5000/api/wahlkreis/all/'+id);
        },
        getResultOneArea: function(id){
            return $http.get('http://localhost:5000/api/result/area/'+id);
        }
    };
});