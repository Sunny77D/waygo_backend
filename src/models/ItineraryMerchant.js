const { Model, BelongsToOneRelation } = require('objection')
const uuidv4 = require('uuid/v4')

class MerchantItinerary extends Model {
  $beforeInsert() {
    this.id = uuidv4()
  }
  static get tableName() {
    return 'merchants_itineraries'
  }

  static get relationMappings() {
    const Merchant = require('./Merchant')
    const Itinerary = require('./Itinerary')

    return {
      campaign: {
        relation: BelongsToOneRelation,
        modelClass: Merchant,
        join: {
          from: 'merchants_itineraries.merchantId',
          to: 'merchants.id',
        },
      },
      user: {
        relation: BelongsToOneRelation,
        modelClass: Itinerary,
        join: {
          from: 'merchants_itineraries.itineraryId',
          to: 'itineraries.id',
        },
      },
    }
  }
}

module.exports = MerchantItinerary
