const { Model, ManyToManyRelation } = require('objection')
const uuidv4 = require('uuid/v4')

class Merchant extends Model {
  $beforeInsert() {
    this.id = uuidv4()
  }
  static get tableName() {
    return 'merchants'
  }
  static get idColumn() {
    return 'id'
  }
  static get relationMappings() {
    const Itinerary = require('./Itinerary')

    return {
      merchants: {
        relation: ManyToManyRelation,
        modelClass: Itinerary,
        join: {
          from: 'merchants.id',
          through: {
            from: 'merchants_itineraries.merchantId',
            to: 'merchants_itineraries.itineraryId',
          },
          to: 'itineraries.id',
        },
      },
    }
  }
}

module.exports = Merchant
