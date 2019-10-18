const PrettyError = require('pretty-error')
const pe = new PrettyError()
pe.skipNodeFiles()

module.exports = pe
