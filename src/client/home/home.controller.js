angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Pokemon!!';

  $scope.getPokemon = function() {
    httpFactory.getPokemon()
    .then(function(response){
      console.log(response);
      // console.log(response.data.forms[1]);
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
