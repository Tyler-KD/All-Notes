# All Notes

![GitHub License](https://img.shields.io/badge/license-MIT-default.svg)

## Description

All Notes is an application that can be used to write and save notes.  Since the application's front end was already created, this project was designed to build the back end, connect the two by way of Express.js framework, and then deploy the entire epplication to Heroku.  This project solves the problem of wanting to be able to write and save notes so that thoughts are organized and tasks needed to complete are kept track of.  Some things learned throughout All Notes are understanding the usefulness of modularization through an express.Router class, seeing middleware in action as connections between request and response, and employing while recognizing differences between GET, POST, AND DELETE routes.  Seeing the relationship betweeen the front end and back end helps explain how client-side requests are related to server-side responses.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Deployed Site](#deployed-site)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Features](#features)
* [Questions](#questions)

## Installation

First, clone the starter code and make own respository with the starter code.  Within the main directory, install dependencies by opening the terminal and entering "npm i."  After installing dependencies, install the Universally Unique Identifier library with the command "npm i uuidv4."  UUID is used to identify objects for purposes of saving notes to the request body and returning those notes to the client when clicking the notes.

## Usage

To run this application from the terminal, enter "npm start" within the console.  The message "Example app listening at http://localhost:3001" will log in the console.  To follow the link, press (ctrl + click) on the URL.  When the page opens up, a landing page is presented with a link to the notes page.  Click on the link to the notes page and a page with existing notes are displayed on the left-hand column while new notes are available to make on the right-hand column.  Enter a new note title and note text.  In the top right navigation bar, "Clear Form" and "Save Note" buttons will appear after filling out inputs.  After saving a note, it will appear in the left-hand column with other existing notes.  When clicking on an existing note, then that selected note and text will appear in fields on the right-hand column with a "New Note" button appearing in the top right navigation bar.  Clicking the "New Note" button will empty the fields so that a new note and text can be entered.  Finally, delete an existing note by clicking on the trashcan icon to right of each note.

To run this application from Heroku, open the deployed application URL and follow previous instructions from the landing page.

**Attached is a screenshot of the Landing Page:**

![Landing-Page](./Assets/images/All%20Notes%20Landing%20Page.png)

**Attached is a screenshot of the Notes Page:**

![Notes-Page](./Assets/images/All%20Notes%20Notes%20Page.png)

## Video

N/A

## Deployed Site

[]()

## Credits

[Steps to create an Express.js App](https://www.geeksforgeeks.org/steps-to-create-an-express-js-application/)

[Express Routing](https://expressjs.com/en/guide/routing.html#express-router)

[Node.js Path Module](https://www.w3schools.com/nodejs/ref_path.asps)

[How to read and write JSON files in node.js](https://attacomsian.com/blog/nodejs-read-write-json-files)

[How to create a GUID / UUID in JS?](https://www.geeksforgeeks.org/how-to-create-a-guid-uuid-in-javascript/)

[What are UUIDs and Why are They Useful?](https://www.howtogeek.com/devops/what-are-uuids-and-why-are-they-useful/)

[Express app.delete() Function](https://www.geeksforgeeks.org/express-js-app-delete-function/)

[Map() vs Filter() in JS](https://www.geeksforgeeks.org/map-vs-filter-in-javascript/)

[The difference between the filer() and map() array methods in JS](https://medium.com/@c.mansour/the-difference-between-the-filter-and-map-array-methods-in-javascript-f8164f65fa5e)

[Deploying with Git | Heroku Dev Center](https://devcenter.heroku.com/articles/git#create-a-heroku-remote)

## Contributing

N/A

## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

* (https://choosealicense.com/licenses/mit/)

## Tests

N/A

## Features

node.js, npm (node package manager), express.js 4.18.2, UUIDv4 (Universally Unique Identifier) 6.2.13, express.Router, fs (File System), path module, Heroku

## Questions

If you have any questions, please visit [GitHub/Tyler-KD](https://github.com/Tyler-KD) or submit questions to tyler.kd.knapp@gmail.com.
