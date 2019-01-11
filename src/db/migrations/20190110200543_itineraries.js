/* eslint-disable */
exports.up = knex => {
    return knex.schema.createTable('itineraries', function(table) {
      table
        .uuid('id')
        .notNullable()
        .primary()
  
      table.string('name')
  
      table.float('budget').notNull()
  
      table.timestamp('createdAt').defaultTo(knex.fn.now()).notNull()
    })
  }
  
  exports.down = async knex => knex.schema.dropTable('itineraries')
  