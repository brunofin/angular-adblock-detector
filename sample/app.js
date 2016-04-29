(function(angular) {
  var app = angular.module('SampleApp', ['angular-adblock-detector']);

  app.controller('AdBlockTestCtrl', ['$scope', 'AdBlockDetector', function($scope, AdBlockDetector) {
      AdBlockDetector.detect().then(function(adsblocked) {
        if (adsblocked) {
          $scope.message = 'An evil ads blocker has been detected. Ready to unleash hell.';
          unleashHell();
        } else {
          $scope.message = 'Thank you for supporting us :)';
        }
      });

      var unleashHell = function() {
        // do your evil things here

        // something like imploding de GPU with dark matter is the least expected in this case.
        // we are also working on a JavaScript lib that does that.
      }
  }]);
})(window.angular)
