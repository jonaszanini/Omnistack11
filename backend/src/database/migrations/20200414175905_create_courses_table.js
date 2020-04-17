
exports.up = function(knex) {
    return knex.schema.createTable('courses', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('level').notNullable();
        table.string('duration').notNullable();
        table.integer('usersEnrolled').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses');
};
