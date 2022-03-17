exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('apto')
      table.string('number').notNull()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts')
  };