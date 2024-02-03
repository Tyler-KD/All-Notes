// Imports express
const api = require('express').Router();
const path = require('path');
// Imports the File System Module
const fs = require('fs');

// This API route is a GET Route for reading all saved notes as JSON
api.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for /api/notes`)
    // fs.readFile() method reads data from a file asynchronously
    // fs.readFile() does not block the execution of the event loop while reading the file
    // The control is shifted to the successive line to execute the remaining lines of code
    // Once the file data becomes available, fs.readFile() invokes the callback function passed to it as an argument
    // utf-8 encodes unicode numbers into binary numbers to be stored in the computer
    fs.readFile('./db/db.json', 'utf-8', (err,data) => {
        res.json(JSON.parse(data))
    })
})

// This API route is the POST Route for saving new notes to request body, 
// adding it to db.json, and then return the new note to the client
api.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received for /api/notes`)
    fs.readFile('./db/db.json', 'utf-8', (err,data) => {
        // const notes = array of existing data
        const notes = JSON.parse(data)
        // const newNote = array of new data
        const newNote = req.body
        // newNote data is pushed into notes array
        notes.push(newNote)
        // writeFileSync method synchronously writes data to a file
        // writeFileSync blocks the the execution of the Node.js event loop until the file is written to disk
        fs.writeFileSync('./db/db.json', JSON.stringify(notes))
        res.json(notes)
    })
})

// Exports the app
module.exports = api;