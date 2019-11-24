randomid
=======

This module generates random ids that can be safely used as DOM element ids.

Installation
------------

    npm install @jimkang/randomid

For use as command line util: `npm install -g @jimkang/randomid`

Usage
-----

As module:

  var RandomId = require('@jimkang/randomid');
  var randomId = RandomId();
  var id = randomId(10);

[Here's an example.](http://jimkang.com/randomid/example)

If you want to use your own random function (for example, one that uses a specific seed for reproducible results), you can provide it in the constructor:

    var RandomId = require('@jimkang/randomid');
    var seedrandom = require('seedrandom');
    var randomId = RandomId({ random: seedrandom('test') });

If you don't provide a random option, it will just use `Math.random` for the random function.

As command line util:

    randomid 5

(Then, it will produce a five-character id.)

Tests
-----

Run tests with `make test`.

License
-------

MIT.
