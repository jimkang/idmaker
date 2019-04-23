var Probable = require('probable').createProbable;
var idChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

function RandomId() {
  var probable = Probable();
  return randomId;

  // Creates a string of random characters of the length specified.
  function randomId(len) {
    var id = '';
    for (var i = 0; i < len; ++i) {
      id += probable.pickFromArray(idChars);
    }
    return id;
  }
}

module.exports = RandomId;
