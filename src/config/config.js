var env = process.env.NODE_ENV || 'development'

var config = {
  development: require('./dev.js'),
  production: require('./prod.js')
}

module.exports = config[env]
