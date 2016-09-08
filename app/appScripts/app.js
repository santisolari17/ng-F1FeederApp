angular.module('F1FeederApp', [
'F1FeederApp.services',
'F1FeederApp.controllers',
'ngRoute',
'ngMaterial'])

//.config(['$routeProvider', function($routeProvider) {
//
	//$routeProvider
		//.when("/drivers", {templateUrl: "app/views/drivers.html", controller: "driversController"})
		//.when("/drivers/:id", {templateUrl: "app/views/driver.html", controller: "driverController"})
		//.otherwise({redirectTo: 'app/drivers'});
//}]);

.config(($routeProvider, $mdThemingProvider) => {

	$routeProvider
		.when("/drivers", {templateUrl: "app/views/drivers.html", controller: "driversController"})
		.when("/drivers/:id", {templateUrl: "app/views/driver.html", controller: "driverController"})
		.otherwise({redirectTo: 'app/drivers'});

    $mdThemingProvider
		.theme('default')
		.primaryPalette('deep-orange')
		.accentPalette('red');

  })