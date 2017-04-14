/**
 * Created by sshss on 2017/4/13.
 */
//window.localStorage['tasks'] = ""

angular.module('starter.controllers')
  .controller('TasksController', function ($rootScope, $scope, Tasks) {
    $scope.tasks = Tasks.all();
    $scope.listCanSwipe = true;

    $scope.completeTask = function(task) {
      task.isCompleted = 1;
      var index = Tasks.complete(task);
      $scope.tasks.splice(index , 1);
      $scope.tasks.push(task);
    };
    $scope.deleteTask  = function(task) {
      task.isCompleted = 0;
      var index = Tasks.delete(task);
      $scope.tasks.splice(index , 1);
    };
  })

