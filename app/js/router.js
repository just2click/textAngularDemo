angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/minieditor', {
    templateUrl: 'minieditor.html',
    controller: 'MiniEditorController'
  });
  
  $routeProvider.when('/textangular', {
    templateUrl: 'textangular.html',
    controller: 'TextangularController'
  });  

  $routeProvider.when('/settings', {
    templateUrl: 'settings.html',
    controller: 'SettingsController'
  });

  $routeProvider.when('/about', {
    templateUrl: 'about.html',
    controller: 'AboutController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
