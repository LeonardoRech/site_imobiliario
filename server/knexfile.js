// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'corso_ni',
    user:     'postgres',
    password: 'gremio989'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
