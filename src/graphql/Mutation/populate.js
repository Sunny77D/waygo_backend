const Merchant = require('../../models/Merchant')
const Data = require('../../../data')

const populateResolver = async () => {
  const arr = Data.data

  arr.map(
    async item => {
      await Merchant.query().insertAndFetch({
        name: item.name,
        category: item.category[0],
        streetNum: item.address['street number'],
        streetName: item.address['street name'],
        city: item.address.city,
        state: item.address.state,
        zip: item.address.zip,
        numTransactions: item.num_transactions,
        avgAmount: item.avg_amount,
        lon: item.geocode.lng,
        lat: item.geocode.lat,
      })
    }
  )
  return {
    success: true,
    error: null
  }
}

const resolver = { Mutation: { populate: populateResolver } }
module.exports = resolver
