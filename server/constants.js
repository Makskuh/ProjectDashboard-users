require('dotenv').config();

const CONSTANTS = {
  PORT: process.env.PORT || 6000,
  DB_URL: process.env.DB_URL ||
    `mongodb://localhost:27017`,
  DB_HOST: process.env.DB_HOST || 'mongotest.aweennl.mongodb.net',
  USER_LOGIN: process.env.USER_LOGIN || 'admin',
  USER_PASSWORD: process.env.USER_PASSWORD || 'admin',
  DB_NAME: process.env.DB_NAME || 'testDB',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'token',
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN || '10 days',
}

module.exports = CONSTANTS;