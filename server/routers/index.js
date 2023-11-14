const router = require('express').Router();
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const projectRouter = require('./projectRouter');

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/project',projectRouter)


module.exports = router;
