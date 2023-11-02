const notes = require('express').Router();

notes.use('/', (req,res) => {
    res.send('You made it!!')
});

module.exports = notes;