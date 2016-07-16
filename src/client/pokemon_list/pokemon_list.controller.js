angular.module('app')
.controller('PokemonController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = "KTV's Pokemon Go!!";

  function activate() {
    httpFactory.myPokemon()
    .then(function(response){
      $scope.pokemons = response.data;
    });
  };
  activate();

}]);
