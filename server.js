// Import and enable express and path
// Provide path to routes
const express = require('express');
const app = express();
const api = require('./public/assets/scripts');
const path = require('path');

const PORT = process.env.PORT||3001

// Appoint static folder for public files
app.use(express.static('public'));

// Route for requests with /api
app.use('/api', api);

// When GET /notes is received, redirect to notes.html page
app.get('/notes', (req, res) => {
  res.redirect('/notes.html');
});

// when any unknown paths are requested (GET), the front Index page is returned
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Assigns listener for server at designated PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);