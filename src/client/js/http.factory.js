angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getPokemon = function(pokemon) {
    // var pokemon = Math.floor(Math.random()*718) +1;
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/'+pokemon+'/'
    });
  };

  factory.getMoves = function() {
    var move = Math.floor(Math.random()*639) +1;
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/move/'+move+'/'
    });
  };

  factory.savePokemon = function(pokemon) {
    console.log('hey');
    return $http ({
      method: 'POST',
      url: '/pokemon',
      data: {pokemon: pokemon}
    });
  };

  return factory;

}]);
