var assert = require('assert'),
    through = require('through'),
    aggregate = require('./index');

describe('stream-aggregate', function() {

  it('aggregates object stream', function(done) {
    var stream = through();
    aggregate(stream, function(err, result) {
      assert.ok(!err);
      assert.deepEqual(result, [1, 2]);
      done();
    });

    stream.write(1);
    stream.write(2);
    stream.end();
  });

  it('aggregates stream of string data', function(done) {
    var stream = through();
    aggregate(stream, function(err, result) {
      assert.ok(!err);
      assert.deepEqual(result, 'xy');
      done();
    });

    stream.write('x');
    stream.write('y');
    stream.end();
  });

  it('aggregates binary stream', function(done) {
    var stream = through();
    aggregate(stream, function(err, result) {
      assert.ok(!err);
      assert.deepEqual(result.toString(), 'xy');
      done();
    });

    stream.write(new Buffer('x'));
    stream.write(new Buffer('y'));
    stream.end();
  });

  it('returns an error on stream error', function(done) {
    var stream = through();
    aggregate(stream, function(err, result) {
      assert.ok(err);
      done();
    });

    stream.emit('error', new Error('oops'));
    stream.end();
  });

});
