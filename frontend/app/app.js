'use strict';

// Defining Angular app model with all other dependent modules
var myApp = angular.module('myApp',['ngRoute',
	'myApp.home','myApp.about','myApp.login','myApp.result','angularSpinner']);

myApp.config(function($routeProvider, $locationProvider, $httpProvider, usSpinnerConfigProvider) {
	
	// Declaration of the default route if neither of the controllers
	// is supporting the request path
	$routeProvider.otherwise({ redirectTo: '/'});

	// Settings for http communications
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$locationProvider.hashPrefix('');

    usSpinnerConfigProvider.setDefaults({color: 'orange'});

	// disabling # in Angular urls
	// $locationProvider.html5Mode({
	// 		enabled: true,
	//      requireBase: false
	// });
});
