var RandomId = require('../index');
var test = require('tape');
var seedrandom = require('seedrandom');

test('There should not be any clashes', function testClashes(t) {
  var randomId = RandomId();
  var ids = [];
  for (var i = 0; i < 10; ++i) {
    var id = randomId(8);
    for (var j = i - 1; j >= 0; --j) {
      t.notEqual(id, ids[j]);
    }
    ids.push(id);
  }
  t.end();
});

test('Lengths of ids should be as specified', function lengthSuite(t) {
  var randomId = RandomId();
  for (var i = 0; i < 10; ++i) {
    t.equal(i, randomId(i).length);
  }
  t.end();
});

test('Use seed when picking random chars', seedTest);

function seedTest(t) {
  var randomId = RandomId({ random: seedrandom('test') });
  t.equal(randomId(4), 'tUyP', 'id is correct.');
  t.equal(randomId(4), 'SOYF', 'id is correct.');
  t.equal(randomId(4), 'lWZw', 'id is correct.');
  t.equal(randomId(4), 'xApx', 'id is correct.');
  t.equal(randomId(4), 'UCjg', 'id is correct.');
  t.end();
}
