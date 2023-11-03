const express = require('express');
const notesRouter = require('../../routes/notes')

const app = express();

app.use('/', (req, res) => res.send("Hello there"));

module.exports = app;