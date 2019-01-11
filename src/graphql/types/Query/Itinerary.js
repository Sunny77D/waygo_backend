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

const idResolver = async (args, input) => {
  const itinerary = await Itinerary.query().findById(input.id)
  const ids = await ItineraryMerchant.query().where('itineraryId', itinerary.id)
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
    id: itinerary.id,
    name: itinerary.name,
    merchants,
    date: itinerary.createdAt,
    budget: itinerary.budget,
  }
}

const resolver = {
  Query: {
    itinerary: itineraryResolver,
    itineraryById: idResolver
  },
}

module.exports = resolver
