var asStream = require('./index'),
    through = require('through'),
    assert = require('assert')

describe('as-stream', function() {

  it('converts a string into a stream', function(done) {
    var seen = []
    asStream('x', 'y').pipe(through(seen.push.bind(seen), function() {
      assert.deepEqual(seen, ['x', 'y'])
      done()
    }))
  })

  it('build an empty stream with no args', function(done) {
    var seen = []
    asStream().pipe(through(seen.push.bind(seen), function() {
      assert.deepEqual(seen, [])
      done()
    }))
  })

})
