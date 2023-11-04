const express = require('express');
const notes = require('express').Router();
const db = require('../db/db.json');
const {readFile, writeFile} = require('fs').promises;
const { v4: uuidv4 } = require('uuid');


notes.use(express.json());
notes.use(express.urlencoded({ extended: true }));

notes.get('/notes', (req,res) => {
    res.json(db);
});

notes.post('/notes', (req, res) => {
    const{title, text} = req.body;

    if ((!title)||(!text)){
        res.send('please enter valid details')
    };

    const newTask = {
        title,
        text,
        id: uuidv4(),
    }

    db.push(newTask);
    writeFile('./db/db.json', JSON.stringify(db));
    res.send(db);

})

notes.delete('/notes/:id', (req, res) => {
    let origArray = db;
    const id = req.params.id
    origArray.forEach((task) => {
    if((task.id) ===id){
        const indexNum = origArray.indexOf(task);
        origArray.splice(indexNum , 1)
    }}
    )
    writeFile('./db/db.json', JSON.stringify(origArray));
    res.send(origArray);
    }
    // if (req.params.id !== origArray.find(req.params.id)){
    //     res.send('No Match')
    // };
    
    // console.log(`${req.params.id}`)


)
module.exports = notes;