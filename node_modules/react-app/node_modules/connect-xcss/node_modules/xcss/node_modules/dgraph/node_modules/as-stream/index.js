var through = require('through')

module.exports = function(str) {
  if (str && typeof str.pipe === 'function') return str

  var stream = through()
  stream.pause()
  process.nextTick(stream.resume.bind(stream))
  for (var i = 0, length = arguments.length; i < length; i++)
    stream.queue(arguments[i])
  stream.queue(null)
  return stream
}
