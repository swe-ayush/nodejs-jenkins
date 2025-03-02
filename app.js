const express = require('express');
const app = express();
const port = 3000;

let server; // Declare a variable to hold the server instance

app.get('/', (req, res) => {
  res.send('Hello from Node.js 22!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from API' });
});

// Start the server and store the server instance
server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the app and the server for testing
module.exports = { app, server };