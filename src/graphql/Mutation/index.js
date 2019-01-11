const merge = require('lodash.merge')
const populate = require('./populate')
const create = require('./create')

const resolvers = [populate, create]

module.exports = merge(...resolvers)
