#!/usr/bin/env node

/* global process */

var RandomId = require('./index');
var minimist = require('minimist');

var { _, upper, count } = minimist(process.argv.slice(2));

const length = +_[0];

if (!length) {
  console.log(
    `Usage: [node] randomid <length of id>
  [--upper, provide this to generate ids with only uppercase alpha chars]
  [--count, the number of ids to generate. Defaults to 1.]`
  );
  process.exit();
}

if (!count) {
  count = 1;
}

var opts = {};
if (process.argv.length > 3) {
  if (upper) {
    opts.idChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
}

var randomId = RandomId(opts);

for (var i = 0; i < +count; ++i) {
  console.log(randomId(length));
}
