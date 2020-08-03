const db = require("../../data/dbConfig")

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('tasks as t')
            .join("projects as p","p.id", "t.project_id")
            .select("p.id as project_id",
                    "p.project_name",
                    "p.description as project_description",
                    "t.id as task_id" ,
                    "t.description",
                    "t.notes",
                    "t.task_completed")

}
function findById(id) {
    return db('tasks').where("id",id).first();
}

function add(task) {
    return db('tasks')
                .insert(task)
                .then((task) => {
                    return findById(task[0])
                })
}