// Code goes here

angular.module('webapp', ['ngMaterial'])
  .controller('AppCtrl', function($scope) {

    window.$dots = $scope;


    $scope.todos = [];

    $scope.grid = {
      rows: []
    };
    for(var row = 0; row < 30; row++){
      $scope.grid.rows[row] = [];
      for(var col = 0; col < 30; col++){
        $scope.grid.rows[row][col] = {
          type: 'red'
        };
      }
    }

    for (var i = 0; i < 45; i++) {
      $scope.todos.push({
        face: 'https://avatars0.githubusercontent.com/u/598463?v=3&s=60',
        what: "Brunch this weekend?",
        who: "Markus Thiel",
        notes: "I'll be in your neighborhood doing errands."
      });
    }
  });