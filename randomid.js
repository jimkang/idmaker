#!/usr/bin/env node

/* global process */

var RandomId = require('./index');

if (process.argv.length < 3) {
  console.log(
    'Usage: [node] randomid <length of id> [--upper, provide this to generate ids with only uppercase alpha chars]'
  );
  process.exit();
}

const length = +process.argv[2];

var opts = {};
if (process.argv.length > 3) {
  if (process.argv[3] === '--upper') {
    opts.idChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
}

var randomId = RandomId(opts);

console.log(randomId(length));
