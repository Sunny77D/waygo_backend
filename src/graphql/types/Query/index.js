const merge = require('lodash.merge')

const merchant = require('./Merchant')
const merchants = require('./Merchants')

const itinerary = require('./Itinerary')

const resolvers = [merchants, merchant, itinerary]

module.exports = merge(...resolvers)
