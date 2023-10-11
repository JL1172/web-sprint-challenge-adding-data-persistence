// build your `/api/resources` router here
const express = require('express');


const router = express.Router();

router.use((error,req,res,next)=> { //eslint-disable-line
    res.status(error.status || 500).json({
        message : error.message,
        customMessage : "You messed up lol",
        stack : error.stack,
    })
})
module.exports = router;