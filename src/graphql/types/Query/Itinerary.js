/* eslint-disable */
const Itinerary = require('../../../models/Itinerary')
const Merchant = require('../../../models/Merchant')
const ItineraryMerchant = require('../../../models/ItineraryMerchant')

const itineraryResolver = async () => {
  const rows = await Itinerary.query()
  const toReturn = rows.map(async row => {
    const ids = await ItineraryMerchant.query().where('itineraryId', row.id)
    const merchants = ids.map(async item => {
      const merchant = await Merchant.query().findById(item.merchantId)
      const address = merchant.streetNum + " " + merchant.streetName + ", " + merchant.city + ", " + merchant.state + " " + merchant.zip
      return {
        id: merchant.id,
        name: merchant.name,
        address,
        numTransactions: merchant.numTransactions,
        avgAmount: merchant.avgAmount,
      }
    })
    return {
      id: row.id,
      name: row.name,
      merchants,
      date: row.createdAt,
      budget: row.budget,
    }
  })
  return toReturn
}

const resolver = {
  Query: {
    itinerary: itineraryResolver,
  },
}

module.exports = resolver
