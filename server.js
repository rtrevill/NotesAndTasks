const express = require('express');
const app = express();
const api = require('./public/assets/scripts')

const PORT = process.env.PORT||3001


app.use('/', (req, res) => {
  res.send('Ahoy');
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);