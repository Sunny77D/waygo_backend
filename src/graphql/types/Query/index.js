const merge = require('lodash.merge')

const merchant = require('./Merchant')
const merchants = require('./Merchants')

const resolvers = [merchants, merchant]

module.exports = merge(...resolvers)
