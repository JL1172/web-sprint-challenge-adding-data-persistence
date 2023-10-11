
module.exports = {
    validatePostBody,
}

async function validatePostBody(req,res,next) {
    try {
        const {task_description,task_notes,project_id} = req.body;
        if (!task_description || !project_id 
            || typeof task_description !== "string" 
            || typeof project_id !== "number"
        ) {
            next({status : 422, message : "need task description and project id"})
        } else {
            if (task_notes && typeof task_notes !== "string") {
                next({status : 422, messae : "notes must be string"})
            } else {
                next(); 
            }
        }
    } catch (err) {next(err)}
}