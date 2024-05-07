const http = require("node:http");
const {app} = require("./app");
const server = http.createServer(app);
// const { Server } = require('socket.io');

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});