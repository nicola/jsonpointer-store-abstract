module.exports = MemoryStore

var jsonpointer = require('jsonpointer')

function MemoryStore (opts) {
  if (!(this instanceof MemoryStore)) return new MemoryStore()
  opts = opts || {}
  this.data = opts.data
}

MemoryStore.prototype.get = function (url, cb) {
  var content = jsonpointer.get(this.data, url)
  if (content === null && url === '/') {
    content = this.data
  }
  cb(null, content)
}

MemoryStore.prototype.set = function (url, content, cb) {
  cb(null, jsonpointer.set(this.data, url, content))
}

MemoryStore.prototype.delete = function (url, cb) {
  cb(new Error('Delete is not implemented'))
}
