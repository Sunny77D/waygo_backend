/* eslint-disable */
exports.up = knex => {
  return knex.schema.createTable('merchants', function(table) {
    table
      .uuid('id')
      .notNull()
      .primary()

    table.string('name').notNullable()

    table.string('category').notNullable()

    table.string('streetNum').notNullable()

    table.string('streetName').notNullable()

    table.string('city').notNullable()

    table.string('state').notNullable()

    table.string('zip').notNullable()

    table
      .integer('numTransactions')
      .notNullable()
      .unsigned()

    table.float('avgAmount').notNullable()

    table.float('lon')

    table.float('lat')
  })
}

exports.down = async knex => knex.schema.dropTable('merchants')
