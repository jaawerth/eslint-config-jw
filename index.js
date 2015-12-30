'use strict';

var join = require('path').join;
var readFile = require('fs').readFileSync;

module.exports = loadJson('.eslintrc');

function loadJson(filePath) {
  var data = readFile(join(__dirname, filePath), 'utf-8');
  return JSON.parse(data);
}