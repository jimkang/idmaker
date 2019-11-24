#!/usr/bin/env node

/* global process */

var RandomId = require('./index');

if (process.argv.length < 3) {
  console.log('Usage: [node] randomid <length of id>');
  process.exit();
}

var length = +process.argv[2];

var randomId = RandomId();

console.log(randomId(length));
