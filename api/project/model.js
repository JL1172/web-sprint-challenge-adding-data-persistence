// build your `Project` model here
const db = require("../../data/dbConfig")

module.exports = {
    findAll,
    create
}

async function findAll() {
    const projectData = await db("projects");
    const returnValue = projectData.map(n=> {
        if (!n.project_completed) {
            return {...n, project_completed : false}
        } else if (n.project_completed) {
            return {...n, project_completed : true}
        } else {
            return n;
        }
    })
    return returnValue;
}

async function create(createdProject) {
    const created = await db("projects").insert(createdProject);
    const inter = await db("projects").where("project_id",created[0]); 
    const returnValue = inter.map(n=> {
        if (!n.project_completed) {
            return {...n, project_completed : false}
        } else if (n.project_completed) {
            return {...n, project_completed : true}
        } else {
            return n;
        }
    })
    return returnValue[0];
}