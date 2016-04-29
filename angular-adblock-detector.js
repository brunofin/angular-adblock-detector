(function(angular) {
  var app = angular.module('angular-adblock-detector', []);

  app.service('AdBlockDetector', ['$http', function($http) {
    return {
      detect: function() {
        var thenFn = null;
        var _0xb9e1 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x74\x61\x74\x69\x63\x2E\x64\x6F\x75\x62\x6C\x65\x63\x6C\x69\x63\x6B\x2E\x6E\x65\x74\x2F\x69\x6E\x73\x74\x72\x65\x61\x6D\x2F\x61\x64\x5F\x73\x74\x61\x74\x75\x73\x2E\x6A\x73"];

        $http({
          method: 'GET',
          url: _0xb9e1[0]
        }).then(function(response) {
          if (response.status === 200) {
            thenFn(false);
          }
        }).catch(function(response) {
          if (response.status === 0) {
            thenFn(true);
          }
        });

        return {
          then: function(_then) {
            thenFn = _then;
          }
        }
      }
    };
  }]);
})(window.angular);
