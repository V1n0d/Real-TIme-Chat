var through = require('through');

function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]'
}

module.exports = function (stream, cb) {
  var acc = [],
      error = null,
      aggregator = through(acc.push.bind(acc), function() {
        if (error) return;

        if (acc.length === 0) {
          cb(null, null)
        } else if (isString(acc[0])) {
          cb(null, acc.join(''))
        } else if (Buffer.isBuffer(acc[0])) {
          cb(null, Buffer.concat(acc))
        } else {
          cb(null, acc);
        }
      });

  stream.on('error', function(err) {
    if (error) return;

    error = true;
    cb(err);
  });

  stream.pipe(aggregator);
}
