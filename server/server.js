const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const {PORT} = require('./constants')
 
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});