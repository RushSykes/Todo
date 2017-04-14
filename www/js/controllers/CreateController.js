/**
 * Created by sshss on 2017/4/13.
 */
angular.module('starter.controllers')
  .controller('CreateController', function ($state, $scope, Tasks) {
    $scope.createTask = function(task) {
      task.isCompleted = 0;
      Tasks.save(task);
      $state.go("tasks");
      //console.log(task);
    };
  });
