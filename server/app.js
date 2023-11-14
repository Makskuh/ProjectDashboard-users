const express = require('express');
const cors = require('cors');
const router = require('./routers');
const { basicErrorHandler } = require('./middleware/errors');
const { tokenErrorHandler } = require('./middleware/errors/token');
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.use(basicErrorHandler);
app.use(tokenErrorHandler);

module.exports = app;