const userRouter = require('express').Router();
const UserController = require('../controller/user.controller');
const {checkUser} = require('../middleware/user.mv');
const {checkAccessToken} = require('../middleware/token.mv')
const projectRouter = require('./projectRouter')
userRouter.post('/', UserController.createUser);

userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

userRouter.use('/:userId/projects',checkUser,checkAccessToken, projectRouter)

module.exports = userRouter;