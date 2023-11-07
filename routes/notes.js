const express = require('express');
const notes = require('express').Router();
const db = require('../db/db.json');
const {writeFile} = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

// Import parsing for incoming JSON or URL-encoded formats
notes.use(express.json());
notes.use(express.urlencoded({ extended: true }));


// On GET request, send current data file.
notes.get('/notes', (req,res) => {
    res.json(db);
});

// on POST request check validity of request
// then create new task with generated ID and merge into existing data file.
notes.post('/notes', (req, res) => {
    const{title, text} = req.body;

    if ((!title)||(!text)){
        return res.send('please complete both fields')
    };

    const newTask = {
        title,
        text,
        id: uuidv4(),
    }

    db.push(newTask);
    writeFile('./db/db.json', JSON.stringify(db))
    .then(res.send(newTask))
    .catch(err => {
        console.log(`Error, Failed to write file ${err}`)
        res.send('Failed to write file')
    });
});

// On DELETE request, compare request ID to existing IDs in data file
// If there is a match, remove that entry from the data file
notes.delete('/notes/:id', (req, res) => {
    let origArray = db;
    const id = req.params.id;

    origArray.forEach((task) => {
    if((task.id) === id){
        const indexNum = origArray.indexOf(task);
        origArray.splice(indexNum , 1)
    }}
    )

    writeFile('./db/db.json', JSON.stringify(origArray))
    .then(res.send(origArray))
    .catch(err => {
        console.log(`Error, failed to write file ${err}`)
        res.send('Failed to write file')
    });
});

module.exports = notes;