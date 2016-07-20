angular.module('app')
.controller('ShowpageController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = "KTV's";

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
