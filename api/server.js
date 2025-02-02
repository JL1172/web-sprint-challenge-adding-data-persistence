// build your server here and require it from index.js
const express = require("express");
const TaskRouter = require("./task/router");
const ResourceRouter = require("./resource/router");
const ProjectRouter = require("./project/router")
const morgan = require("morgan")


const server = express();

server.use(express.json())
server.use(morgan("dev")); 

//routes
server.use("/api/projects",ProjectRouter);
server.use("/api/resources",ResourceRouter);
server.use("/api/tasks",TaskRouter);
//routes

module.exports = server; 