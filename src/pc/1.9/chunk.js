const constants = require('../common/constants')

function loader (registry) {
  const Block = require('reinarpg-block')(registry)
  const Chunk = require('./ChunkColumn')(Block, registry)
  // expose for test purposes
  Chunk.h = constants.CHUNK_HEIGHT
  Chunk.version = registry.version
  return Chunk
}

module.exports = loader
