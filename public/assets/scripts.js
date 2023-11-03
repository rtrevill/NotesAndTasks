const express = require('express');
const notesRouter = require('../../routes/notes')

const app = express();

app.use('/', notesRouter);

module.exports = app;