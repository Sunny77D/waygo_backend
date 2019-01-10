const merge = require('lodash.merge')

const merchant = require('./Merchant')

const resolvers = [merchant]

module.exports = merge(...resolvers)
