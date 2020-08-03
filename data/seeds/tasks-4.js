
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description:"start project",notes:"start on the project today",project_id:1},
        {description:"work on project",notes:"work on the project today",project_id:1},
        {description:"Finish project",notes:"finish the project today",project_id:1}
      ]);
    });
};
