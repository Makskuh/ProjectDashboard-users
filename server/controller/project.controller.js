const { Project } = require('../models');

class ProjectController {
  static async createProject(req, res, next) {
    const { body, user } = req;
    const project = await Project.create({
      ...body,
      author: user._id,
    });

    await user.updateOne({ $push: { projects: project._id } });

    res.status(201).send({ data: project });
  }

  static async getUserProjects(req, res, next) {
    const { user } = req;

    const projects = await Project.find({ author: user._id })
      .select('-__v')
      .populate({ path: 'author', select: ['firstName', 'lastName'] });

    res.send({ data: projects });
  }
}
module.exports = ProjectController;
