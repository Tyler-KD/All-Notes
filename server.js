// Import Express.js
const express = require('express');

// Import the html routes
const htmlRoutes = require('./routes/html-routes')

// Import the api routes
const apiRoutes = require('./routes/api-routes')

// Specify on which port the Express.js server will run.
// Applications that feature an Express.js back end can use Heroku's PORT environment variable.
// process.env.PORT stores the port number on which a web server should listen for incoming connections.
// process.env.PORT allows the port number to be configured through the environment,
// making it easy to set up application differently in different environments or cloud providers
const PORT = process.env.PORT || 3001;

// Initialize an instance of Express.js
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Middleware to use api routes
app.use(apiRoutes);

// Middleware to use html routes
app.use(htmlRoutes);

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
    console.log(`All Notes app listening at http://localhost:${PORT}`)
);