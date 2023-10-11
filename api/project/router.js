// build your `/api/projects` router here
const express = require('express');
const { findAll, create } = require("./model");
const { validatePostBody } = require('./middleware');

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const projectData = await findAll();
        res.status(200).json(projectData);
    } catch (err) { next(err) }
})
router.post("/", validatePostBody, async (req, res, next) => {
    try {
        const createdProject = await create(req.body);
        res.status(201).json(createdProject);
    } catch (err) { next(err) }
})

router.use((error, req, res, next) => { //eslint-disable-line
    res.status(error.status || 500).json({
        message: error.message,
        customMessage: "You messed up lol",
        stack: error.stack,
    })
})
module.exports = router;