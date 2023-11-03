const express = require('express');
const notes = require('express').Router();
const db = require('../db/db.json')

notes.use(express.json());
notes.use(express.urlencoded({ extended: true }));

notes.get('/notes', (req,res) => {
    res.json(db);
});

notes.post('/notes', (req, res) => {
    console.log(req.body.title, req.body.text);
    res.send('Received');
})

module.exports = notes;