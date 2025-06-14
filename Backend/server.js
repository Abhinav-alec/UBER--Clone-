const http = require("http");
const app = require("./app"); // Import the Express app
const port = process.env.port || 3000;

const server = http.createServer(app); // Create an HTTP server using the Express app

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
