/**
 * Created by sshss on 2017/4/13.
 */
angular.module('starter.services')
  .factory('Tasks', function() {
    return {
      all: function() {
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          return angular.fromJson(taskString);
        }
        return [];
      },
      save: function(task) {
        var tasks = [];
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          tasks = angular.fromJson(taskString);
        }
        tasks.push(task);
        window.localStorage['tasks'] = angular.toJson(tasks);
      },
      delete: function(task) {
        var tasks = [];
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          tasks = angular.fromJson(taskString);
        }

        var index;
        for(var i = 0; i < tasks.length; i++) {
          if(tasks[i].title === task.title) {
            index = i;
            break;
          }
        }
        tasks.splice(index, 1);
        window.localStorage['tasks'] = angular.toJson(tasks);
        return index;
      },
      complete: function(task) {
        var tasks = [];
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          tasks = angular.fromJson(taskString);
        }

        var index;
        for(var i = 0; i < tasks.length; i++) {
          if(tasks[i].title === task.title) {
            index = i;
            break;
          }
        }
        tasks.splice(index, 1);
        tasks.push(task);
        window.localStorage['tasks'] = angular.toJson(tasks);
        return index;
      }
    }
  })

