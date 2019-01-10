/* eslint-disable */
const Merchant = require('../../../models/Merchant')

const merchantResolver = async (obj, { id }) =>
  Merchant.query()
    .where('id', id)
    .first()

const resolver = {
  Query: {
    merchant: merchantResolver,
  },
}

module.exports = resolver
