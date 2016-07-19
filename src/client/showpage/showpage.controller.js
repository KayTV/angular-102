angular.module('app')
.controller('ShowpageController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = "Show KTV's Pokemon!!";

  function activate() {
    var id = httpFactory.getCurrentPokemon();
    httpFactory.getOnePokemon(id)
    .then(function(response){
      console.log(response);
      $scope.pokemon = response.data;
    });
  }
  activate();

}]);
