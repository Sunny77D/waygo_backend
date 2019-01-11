/* eslint-disable */
const Itinerary = require('../../../models/Itinerary')

const itineraryResolver = async () =>
  await Itinerary.query()

const resolver = {
  Query: {
    itinerary: itineraryResolver,
  },
}

module.exports = resolver
