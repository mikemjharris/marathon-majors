angular.module('marathon')
.config(function ( $urlRouterProvider, $stateProvider, $locationProvider ){

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'client/home.ng.html',
    controller: 'HomePageController'
  })
  

  $urlRouterProvider.otherwise('/');

});
