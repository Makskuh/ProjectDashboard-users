const mongoose = require('mongoose');
const { USER_LOGIN,USER_PASSWORD,DB_HOST, DB_NAME } = require('../constants');


async function connectToDB() {
  await mongoose.connect(`mongodb+srv://${USER_LOGIN}:${USER_PASSWORD}@${DB_HOST}/${DB_NAME}`) 
}

connectToDB().catch((err) => console.log(err));


module.exports.User = User;