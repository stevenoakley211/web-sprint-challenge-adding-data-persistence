const db = require("../../data/dbConfig")

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('resources')
}
function findById(id) {
    return db('resources').where("id",id).first();
}

function add(project) {
    return db('resources')
                .insert(project)
                .then((project) => {
                    return findById(project[0])
                })
}