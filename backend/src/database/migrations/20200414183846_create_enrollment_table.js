
exports.up = function(knex) {
    return knex.schema.createTable('enrollment', function (table){
        table.increments();
		
        table.string('userId').notNullable();
        table.string('courseId').notNullable();
		table.boolean('paid').notNullable();
		
		table.foreign('userId').references('id').inTable('users');
		table.foreign('courseId').references('id').inTable('courses');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('enrollment');
  
};
