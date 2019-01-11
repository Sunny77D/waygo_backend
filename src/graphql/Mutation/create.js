const Merchant = require('../../models/Merchant')
const Itinerary = require('../../models/Itinerary')
const ItineraryMerchant = require('../../models/ItineraryMerchant')

const createItineraryResolver = async (args, {input} ) => {
  const createdItinerary = await Itinerary.query().insertAndFetch({
    name: input.name,
    budget: input.budget,
  })
  const merchants = await Merchant.query().findByIds(input.merchantsId)
  input.merchantsId.map(async id => {
      await ItineraryMerchant.query().insert({ merchantId: id, itineraryId: createdItinerary.id})
  })

  const returnObj = {
    id: createdItinerary.id,
    name: createdItinerary.name,
    merchants,
    date: createdItinerary.createdAt,
    budget: input.budget,
  }
  return {
    success: true,
    itinerary: returnObj,
    error: null,
  }
}

const resolver = { Mutation: { createItinerary: createItineraryResolver } }
module.exports = resolver
