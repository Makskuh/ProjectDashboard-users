const express = require('express');
const cors = require('cors');
// const router = require('./routers');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/',(req,res) => {
  res.send('test')
})
// app.use(router);

module.exports = app;