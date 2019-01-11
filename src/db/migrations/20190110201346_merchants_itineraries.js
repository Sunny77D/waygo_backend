exports.up = function(knex, Promise) {
    return knex.schema.createTable('merchants_itineraries', function(table) {
      table
        .uuid('id')
        .primary()
        .notNull()
      table
        .uuid('merchantId')
        .references('merchants.id')
      table
        .uuid('itineraryId')
        .references('itineraries.id')
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('merchants_itineraries')
  }
  