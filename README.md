# angular-adblock-detector
By Bruno Finger -- bruno.k.finger@gmail.com

Please don't send flame e-mails. Write your own lib to block mine, or update your code if you're a major Ad Blocker developer, so I can update mine, and we will keep things fun this way.

## Why block ad blockers?

They are evil. That's why.

# How to use:

## Installation

Add the lib to your `bower.json`: `'angular-adblock-detector'`.

## Supported settings

It's been tested to work on the following browsers:

* Chrome

On the following operating systems:

* Windows
* Linux

And is able to detect:

* AdBlock
* AdBlock Plus
* Privacy Badger
* hosts file (boy you're in trouble now if you're blocking ads using your hosts file)

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

I accept cryptocurrency donations via the following addresses:

BTC: <todo>

LTC: <todo>

DOGUE: srsly?
