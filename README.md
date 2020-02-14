# angular-adblock-detector

## Why block ad blockers?

They are evil. That's why.

# How to use:

## Installation

### bower:

`bower install angular-adblock-detector`

## Supported settings

It's been tested to work on the following browsers:

* Chrome
* Firefox
* Vivaldi

On the following operating systems:

* Windows
* Linux

And is able to detect (but not distinguish):

* AdBlock
* AdBlock Plus
* Privacy Badger
* hosts file

Other settings haven't been properly tested but should work as well.

## Code

```javascript
// Add 'angular-adblock-detector' as a module dependency
var app = angular.module('SampleApp', ['angular-adblock-detector']);

// of course this can be injected exactly the same way in directives, factories and services, your choice.
app.controller('AdBlockTestCtrl', ['$scope', 'AdBlockDetector', function($scope, AdBlockDetector) {
    AdBlockDetector.detect().then(function(adsblocked) {
      if (adsblocked) {
        // some ad blocker extension is in use. be evil.
      } else {
        // rest assure your ads are being displayed.
      }
    });
}]);
```

`angular-adblock-detector` will not take any action itself after detecting the use of some ad blocker extension, it's simply a tool to detect it's usage, the action  is the fun part and we're leaving it to you.

# Support

If you want to show support, but it's weekends, a beer or two is enough :)

Otherwise, a cup of coffee to keep me going is just great!

https://transferwise.com/pay/c340e27a-8aaa-4307-8a0a-326f42c5b2c2
