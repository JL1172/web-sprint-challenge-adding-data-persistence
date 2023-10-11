

module.exports = {
    validatePostBody,
}

async function validatePostBody(req,res,next) {
    try {
        const {resource_name} = req.body;
        if (!resource_name || typeof resource_name !== "string" ) {
            next({status : 422, message : "need resource name for post"})
        } else {
            if (req.body.resource_description && typeof req.body.resource_description !== "string") {
                next({status : 422, message : "description must be string"})
            } else {
                next();
            }
        }
    } catch (err) {next(err)}
}