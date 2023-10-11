

module.exports = {
    validatePostBody,
}

async function validatePostBody(req, res, next) {
    try {
        const { project_name, project_description } = req.body;
        if (!project_name || typeof project_name !== "string") {
            next({ status: 422, message: "need project name" })
        } else {
            if (project_description && typeof project_description !== "string") {
                next({ status: 422, message: "project description must be string" })
            } else {
                next();
            }
        }
    } catch (err) { next(err) }
}
