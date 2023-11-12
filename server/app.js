const express = require('express');
const cors = require('cors');
const router = require('./routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.get('/',(req,res) => {
  res.send('test')
})

module.exports = app;