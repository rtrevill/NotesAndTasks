const express = require('express');
const app = express();
const api = require('./public/assets/scripts');
const path = require('path');


const PORT = process.env.PORT||3001

app.use(express.static('public'));
app.use('/api', api);

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);