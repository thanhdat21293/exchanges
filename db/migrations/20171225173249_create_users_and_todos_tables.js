
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', (table) => {
      table.increments();
      table.string('phone').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('salt').notNullable()
      table.string('status').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos').dropTable('users')
};
