// Import the required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
