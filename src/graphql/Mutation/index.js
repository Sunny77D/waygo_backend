const merge = require('lodash.merge')
const populate = require('./populate')

const resolvers = [populate]

module.exports = merge(...resolvers)
