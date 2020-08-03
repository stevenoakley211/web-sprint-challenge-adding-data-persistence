const db = require("../../data/dbConfig")

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('projects')
}
function findById(id) {
    return db('projects').where("id",id).first();
}

function add(project) {
    return db('projects')
                .insert(project)
                .then((project) => {
                    return findById(project[0])
                })
}