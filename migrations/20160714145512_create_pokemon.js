exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', function(table){
    table.increments();
    table.string('name');
    table.string('imagefront');
    table.string('imageback');
    table.string('type');
    table.string('move1');
    table.string('move2');
    table.string('move3');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
