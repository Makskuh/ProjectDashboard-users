require('dotenv').config();

const CONSTANTS = {
  PORT: process.env.PORT || 6000,
  DB_URL: process.env.DB_URL ||
    `mongodb://localhost:27017`,
  DB_NAME: process.env.DB_NAME || 'projectDB '
}

module.exports = CONSTANTS;