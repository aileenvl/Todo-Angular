'use strict';

angular.module('todoApp')
   .controller('MainCtrl', function ($scope) {
    $scope.todos = ['buy food', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });