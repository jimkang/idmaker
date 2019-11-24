var Probable = require('probable').createProbable;
const defaultIdChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
  ''
);

function RandomId(opts) {
  var probable;
  var idChars = defaultIdChars;
  if (opts) {
    let { random } = opts;
    probable = Probable({ random });
    if (opts.idChars) {
      idChars = opts.idChars;
    }
  } else {
    probable = Probable();
  }

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
