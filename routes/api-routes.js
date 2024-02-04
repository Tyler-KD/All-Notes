// Imports express
const api = require('express').Router();
// UUID (Universally Unique Identifier) is a 128-bit unique identifier 
// that is used in computer systems to identify resources such as files, objects, and components.
// UUID v4 uses the host's source of random or pseudo-random numbers to issue its values
const { v4: uuidv4 } = require('uuid');
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
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        res.json(JSON.parse(data))
    })
});

// This API route is the POST Route for saving new notes to request body, 
// adding it to db.json, and then return the new note to the client
api.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received for /api/notes`)
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        // const notes = array of existing data
        const notes = JSON.parse(data)
        // const newNote = array of new data
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            // id utilizes the "UUID" library to generate a random UUID
            id: uuidv4(),
        }
        // newNote data is pushed into notes array
        notes.push(newNote)
        // writeFileSync method synchronously writes data to a file
        // writeFileSync blocks the the execution of the event loop and rest of the code until the file is written to disk
        fs.writeFileSync('./db/db.json', JSON.stringify(notes))
        res.json(notes)
    })
});

// This API route is the DELETE Route for reading all notes from the db.json, 
// removing the note with the given id property, and then rewriting the notes to the db.json
api.delete('/api/notes/:id', (req, res) => {
    console.info(`${req.method} request received for /api/notes:id`)
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        const allNotes = JSON.parse(data)
        // console.log(allNotes)
        // const result filters through allNotes array and returns only the notes without the requested id
        const result = allNotes.filter(function(newNotes) {
            return newNotes.id !== req.params.id;
        });
        console.log(result);
        console.log("Note deleted");
        // The filtered result array rewrites the notes to the db.json
        fs.writeFileSync('./db/db.json', JSON.stringify(result))
        res.json(result)
    })
})

// Exports the app
module.exports = api;