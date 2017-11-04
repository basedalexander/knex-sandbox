
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tweets', function (t) {
        t.increments('id').primary();
        t.string('author').notNullable();
        t.string('text').notNullable();
        t.number('createDate').notNullable();
        t.timestamps(false, true);
    })
};

exports.down = function(knex, Promise) {
  
};
