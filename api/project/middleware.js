

module.exports = {
    validatePostBody,
}

async function validatePostBody(req,res,next) {
    try {
        const {project_name} = req.body;
        if (!project_name || typeof project_name !== "string") {
            next({status : 422, message : "project name must be string and is required"})
        } else {
            if (req.body.project_description && typeof req.body.project_description !== "string") {
                next({status : 422, message : "project description must be string"})
            } else if (req.body.project_completed && 
                typeof req.body.project_completed !== "boolean") {
                    next({status : 422, message : "must be a boolean value"})
                } else {
                    next(); 
                }
        }
    } catch (err) {next(err)}
}