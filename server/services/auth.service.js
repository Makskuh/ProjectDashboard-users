const createHttpError = require('http-errors');
const { User, Token } = require('../models');
const JWTService = require('./jwt.service');

module.exports.createSession = async (user) => {

  const tokenPayload = {
    firstName: user.firstName,
    lastName: user.lastName,
    id: user._id
  }

  const accessToken = await JWTService.generateAccessToken(tokenPayload);

  await Token.create({ token: accessToken, userId: user._id });

  return { user, accessToken }
}

module.exports.refreshSession = async (tokenInstance) => {

  const user = await User.findById(tokenInstance.userId);

  if(!user) {
    throw createHttpError(404, 'User not found');
  }

  const tokenPayload = {
    firstName: user.firstName,
    lastName: user.lastName,
    id: user._id
  }

  const accessToken = await JWTService.generateAccessToken(tokenPayload);

  await Token.findOneAndUpdate({token: tokenInstance.token}, {token: accessToken});

  return { user, accessToken }
}