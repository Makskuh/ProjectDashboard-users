const userRouter = require('express').Router();
const UserController = require('../controller/user.controller');


userRouter.post('/', UserController.createUser);

userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);


module.exports = userRouter;