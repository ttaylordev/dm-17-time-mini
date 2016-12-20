(function() {
  'use strict';
  angular.module("miniTimeApp").directive("timeDir", [function() {
      return {
        // templateUrl: './scripts/timeDirective.html', // these are not needed on this project.
        // controller: 'mainCtrl',  // these are not needed on this project.
        template: '<div> The current time is {{time}} </div>',
        restrict: 'E',
        link: () => (scope, element, attrs) {
          let currentTime = new Date()scope.time = currentTime.toString();
        };
      };
    };
  ]);
})();
