angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      })
      .when('/pokemon_list', {
        templateUrl: 'pokemon_list/pokemon_list.html',
        controller: 'PokemonController'
      })
      .when('/showpage', {
        templateUrl: 'showpage/showpage.html',
        controller: 'ShowpageController'
      })
      .otherwise({redirectTo: '/'});
    });
