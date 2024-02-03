// Imports express
const html = require('express').Router();
const path = require('path');

// This HTML Route is a Get route for displaying the notes page
html.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// This HTML Route is a Get route for displaying the homepage
html.get('*', (req, res) => {
    console.info(`${req.method} request received for index`);
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exports the app
module.exports = html;