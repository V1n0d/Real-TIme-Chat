"use strict";

var path      = require('path');
var callsite  = require('callsite');

function getCallsiteDirname() {
  var site = callsite();
  if (!site[2])
    throw new Error('getCallsiteDirname() should be called inside a function');
  return path.dirname(site[2].getFileName());
}

module.exports = getCallsiteDirname;
