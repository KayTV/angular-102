angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Pokemon!!';

  $scope.getPokemon = function() {
    httpFactory.getPokemon($scope.pokemonName)
    .then(function(response){
      console.log(response);
      $scope.pokemon = response.data;
      $scope.pokemonName = '';
    })
  }

  $scope.getMove = function() {
    httpFactory.getMoves()
    .then(function(response){
      console.log(response);
      $scope.move = response.data;
    })
  }

  $scope.savePokemon = function() {
    httpFactory.savePokemon($scope.pokemon)
    .then(function(response){
      console.log('response', response);
    })
  }

}]);
