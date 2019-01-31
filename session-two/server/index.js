// Bring in Express, our web application framework.
const express = require('express');
const path = require('path'); // Node.js default module that provides utilities for working with file and directory paths.

const app = express(); // Create an Express application and assign it to variable app.
const port = 8080; // Port to run on. Change if you want.

// Middleware function to serve static files. 
// We will serve the full contents of /public/
app.use(express.static(path.join(__dirname, '../public/')));

// We only have one route, which is the main root `/`!
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); // Load index.html
});

// Listen on our defined port.
app.listen(port, (req, res) => {
    console.log(`Frontend running on port http://localhost:${port}`);
});
