exports.up = function(knex, Promise) {
    return knex.schema.createTable('images', table => {
      table.increments('id').primary()
      table.integer('idImovel').references('id')
        .inTable('imoveis')
      table.string('path')
    })
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images')
};
