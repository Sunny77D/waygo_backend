const { Model } = require('objection')
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
}

module.exports = Itinerary
