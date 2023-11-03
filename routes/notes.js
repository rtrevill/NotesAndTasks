const express = require('express');
const notes = require('express').Router();
const db = require('../db/db.json');
const {readFile, writeFile} = require('fs').promises;

notes.use(express.json());
notes.use(express.urlencoded({ extended: true }));

notes.get('/notes', (req,res) => {
    res.json(db);
});

notes.post('/notes', (req, res) => {
    console.log(req.body.title, req.body.text);
    const{title, text} = req.body;

    if ((!title)||(!text)){
        res.send('please enter valid details')
    };

    // const newish  = JSON.parse(db)
    // .then(console.log('file read successfully'));

    const newTask = {
        title,
        text
    }

    db.push(newTask);
    writeFile('./db/db.json', JSON.stringify(db));
    res.send(db);

    // async function respond(newish, newTask){
    //     console.log(newish);
    // await newish.push(newTask);
    // res.send(newish);
    // }

    // respond(newish, newTask);
    // res.send(listItems);
})

module.exports = notes;