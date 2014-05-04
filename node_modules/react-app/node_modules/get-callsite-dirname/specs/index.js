var assert = require('assert');
var getCallsiteDirname = require('../index');

describe('getCallsiteDirname()', function() {
  function func() {
    return getCallsiteDirname();
  }
  it('works', function() {
    var dirname = func();
    assert.equal(dirname, __dirname);
  });
});
