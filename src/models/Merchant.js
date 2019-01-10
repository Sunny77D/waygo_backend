const { Model } = require('objection')
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
}

module.exports = Merchant
