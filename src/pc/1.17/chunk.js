function loader (registry) {
  const Block = require('reinarpg-block')(registry)

  return require('./ChunkColumn')(Block, registry)
}

module.exports = loader
