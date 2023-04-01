// Import the required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Define a route that plays music
app.get('/play', (req, res) => {
  res.send(`
    <audio controls>
      <source src="/kuckuck.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  `);
});
// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
