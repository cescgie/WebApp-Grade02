angular.module('MyApp')
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
        }
    };
});