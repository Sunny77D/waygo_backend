const { Model, ManyToManyRelation } = require('objection')

const uuidv4 = require('uuid/v4')

class Itinerary extends Model {
  $beforeInsert() {
    this.id = uuidv4()
  }
  static get tableName() {
    return 'itineraries'
  }
  static get idColumn() {
    return 'id'
  }
  static get relationMappings() {
    const Merchant = require('./Merchant')

    return {
      merchants: {
        relation: ManyToManyRelation,
        modelClass: Merchant,
        join: {
          from: 'itineraries.id',
          through: {
            from: 'merchants_itineraries.itineraryId',
            to: 'merchants_itineraries.merchantId',
          },
          to: 'merchants.id',
        },
      },
    }
  }
}

module.exports = Itinerary
