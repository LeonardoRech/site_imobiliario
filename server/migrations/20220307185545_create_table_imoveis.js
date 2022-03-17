
exports.up = function(knex, Promise) {
    return knex.schema.createTable('imoveis', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('subtitle').notNull()
        table.bigint('price').notNull()
        table.string('image')
        table.bigint('area')
        table.bigint('beedroms')
        table.bigint('garage')
        table.string('desc_apto')
        table.string('desc_edificio')
        table.string('user')
        table.string('category')
        table.string('city')
        table.string('district')
        table.string('perfil')
        table.string('mobilia')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('imoveis')
  };