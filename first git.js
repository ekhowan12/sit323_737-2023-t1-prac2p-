const express = require('express');
const app = express();
const port = 3000;

// Define a route to serve the HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Node.js Web Server</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
      <p>This is a simple HTML page served by a Node.js web server using Express framework.</p>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
