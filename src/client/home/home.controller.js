angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Pokemon!!';

  $scope.getPokemon = function() {
    httpFactory.getPokemon($scope.pokemonName)
    .then(function(response){
      console.log(response);
      $scope.pokemon = response.data;
    })
  }

  $scope.getMove = function() {
    httpFactory.getMoves()
    .then(function(response){
      console.log(response);
      $scope.move = response.data;
    })
  }

}]);
