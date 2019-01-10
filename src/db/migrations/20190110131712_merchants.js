/* eslint-disable */
exports.up = knex => {
  return knex.schema.createTable('merchants', function(table) {
    table
      .uuid('id')
      .notNullable()
      .primary()

    table.string('name')

    table.string('category')

    table.string('streetNum')

    table.string('streetName')

    table.string('city')

    table.string('state')

    table.string('zip')

    table
      .integer('numTransactions')
      .unsigned()

    table.float('avgAmount')

    table.float('lon')

    table.float('lat')
  })
}

exports.down = async knex => knex.schema.dropTable('merchants')
