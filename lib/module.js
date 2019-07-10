const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-spreadsheet'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-spreadsheet.js',
    options
  })
}

module.exports.meta = require('../package.json')
