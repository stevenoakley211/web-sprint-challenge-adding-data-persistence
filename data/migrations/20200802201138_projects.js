
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('project_name')
            .notNullable()
            .unique()
        tbl.string('description', 255)
        tbl.boolean('project_completed')
            .notNullable()
            .defaultTo(false);    
    })
    .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.string('resource_name')
            .notNullable()
        tbl.string('resource_description')    

    })
    .createTable('tasks', tbl => {
        tbl.increments('id')
        tbl.string('description', 255)
            .notNullable()
        tbl.string('notes',255)
            .notNullable()
        tbl.boolean('task_completed')
            .notNullable()
            .defaultTo(false);
        tbl.integer('project_id')
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references('resources.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.primary(['project_id', 'resources_id'])    
            
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExcists('project_resources')
    .dropTableIfExcists('tasks')
    .dropTableIfExcists('resources')
    .dropTableIfExcists('projects')
};
