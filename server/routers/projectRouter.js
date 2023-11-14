const projectRouter = require('express').Router();
const ProjectController = require('../controller/project.controller');

messageRouter.post('/', ProjectController.createProject);
messageRouter.get('/', ProjectController.getUserProjects);

module.exports = projectRouter;