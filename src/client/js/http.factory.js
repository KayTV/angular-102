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

  factory.savePokemon = function(poke) {
    console.log('hey', poke.moves.slice(0,4));
    return $http ({
      method: 'POST',
      url: '/pokemon',
      data: {
        name: poke.name,
        sprites: poke.sprites,
        types: poke.types,
        moves: poke.moves.slice(0,4)
      }
    });
  };

  factory.myPokemon = function() {
    return $http ({
      method: 'GET',
      url: '/my_pokemon'
    })
  }

  factory.getOnePokemon = function(id) {
    return $http({
      method: 'GET',
      url: '/showpage/'+id
    });
  };

  factory.getCurrentPokemon = function() {
      return pokemonId;
  }

  factory.setCurrentPokemon = function(id) {
    pokemonId = id;
    console.log('pokemonId', pokemonId);
    return pokemonId;
  }

  return factory;

}]);
