
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.increments();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.string('lastName').notNullable();
        table.date('birthday');
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.string('street');
        table.string('number');
        table.string('complement');
        table.string('district');
        table.string('cep');
        table.string('city').notNullable();
        table.string('state').notNullable(); //Active / Inactive
        table.string('profile').notNullable(); // Student / Admin
        table.date('lastAccess');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};