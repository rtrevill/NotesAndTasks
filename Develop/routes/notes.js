const notes = require('express').Router();
const db = require('../db/db.json')


notes.get('/notes', (req,res) => {
    res.json(db);
});

module.exports = notes;