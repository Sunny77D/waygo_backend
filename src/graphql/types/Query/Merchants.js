/* eslint-disable */
const Merchant = require('../../../models/Merchant')
const geolib = require('geolib')

const merchantsResolver = async (obj, input) => {
  const possibleMerchants = await Merchant.query()
    .where('category', input.category)
  // code remaining for closest distance
  const distanceAdded = possibleMerchants.map(merchant => {
      const address = merchant.streetNum + " " + merchant.streetName + ", " + merchant.city + ", " + merchant.state + " " + merchant.zip
      const distance = geolib.getDistance({latitude: merchant.lat, longitude: merchant.lon},{latitude: parseFloat(input.lat), longitude: parseFloat(input.lon)}) / 1608
      return {
        id: merchant.id,
        name: merchant.name,
        address,
        numTransactions: merchant.numTransactions,
        avgAmount: merchant.avgAmount,
        distance
      }
  })
  let distanceFiltered
  if (input.walking) {
    //1 mile
    distanceFiltered = distanceAdded.filter(merchant => {
        return merchant.distance < 1
    })
    return distanceFiltered
  } else {
    distanceFiltered = distanceAdded.filter(merchant => {
        return merchant.distance < 5
    })
    return distanceFiltered
  }
}

const resolver = {
  Query: {
    merchants: merchantsResolver,
  },
}

module.exports = resolver
