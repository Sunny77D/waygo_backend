/* eslint-disable */
const Merchant = require('../../../models/Merchant')

const merchantResolver = async obj => {
  return null
}

const resolver = {
  Query: {
    merchant: merchantResolver,
  },
}

module.exports = resolver
