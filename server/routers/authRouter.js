const authRouter = require('express').Router();
const AuthController = require('../controller/auth.controller');
const { checkRefreshToken } = require('../middleware/token.mv');

authRouter.post('/registration', AuthController.registration);
authRouter.post('/login', AuthController.login);
authRouter.post('/refresh', checkRefreshToken, AuthController.refresh);

module.exports = authRouter;