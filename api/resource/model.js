// build your `Resource` model here
const db = require("../../data/dbConfig")

module.exports = {
    create,
    findAll
}

async function create(createdResource) {
    const created = await db("resources")
        .insert(createdResource)
    return await db("resources").where("resource_id", created[0]).first();
}

async function findAll() {
    const resourceData = await db('resources');
    return resourceData;
}
