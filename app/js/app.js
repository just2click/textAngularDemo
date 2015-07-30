angular.module("app", ["ngResource", "ngRoute", "ngAnimate", "ngSanitize", "mgcrea.ngStrap", "jerryhsia.minieditor", "textAngular", "ui.bootstrap"])
  .run(function($rootScope) {
    // adds some basic utilities to the $rootScope for debugging purposes
    $rootScope.log = function(thing) {
      console.log(thing);
    };
  
    $rootScope.alert = function(thing) {
      alert(thing);
    };
  });

angular.module("app")
	.controller('NavbarController', function($scope, $location) {
		$scope.$location = $location;
	});