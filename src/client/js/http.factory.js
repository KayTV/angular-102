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
    // name: req.body.name,
    //   imagefront: req.body.sprites.front_default,
    //   imageback: req.body.sprites.back_default,
    //   type: req.body.types[0].type.name,
    //   move1: req.body.moves[0].move.name,
    //   move2: req.body.moves[1].move.name,
    //   move3: req.body.moves[2].move.name
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

  return factory;

}]);
