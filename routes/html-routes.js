// Imports express
const html = require('express').Router();
const path = require('path');

// Get route for the notes page
html.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Get route for the homepage
html.get('*', (req, res) => {
    console.info(`${req.method} request received for index`);
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exports the app
module.exports = html;