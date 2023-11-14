const router = require('express').Router();
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const { basicErrorHandler } = require('./middleware/errors');
const { tokenErrorHandler } = require('./middleware/errors/token');

router.use('/users', userRouter);
router.use('/auth', authRouter);

router.use(basicErrorHandler);
router.use(tokenErrorHandler);

module.exports = router;
