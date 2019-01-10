const { Model } = require('objection')

class Merchant extends Model {
  static get tableName() {
    return 'merchants'
  }
  static get idColumn() {
    return 'id'
  }
}

module.exports = Merchant
