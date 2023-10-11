// build your `Project` model here
const db = require("../../data/dbConfig")

module.exports = {
    findAll,
    create
}

async function findAll() {
    const projectData = await db("projects");
    return projectData;
}

async function create(createdProject) {
    const created = await db("projects").insert(createdProject);
    return await db("projects").where("project_id",created[0]).first(); 
}