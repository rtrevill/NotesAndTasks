const express = require('express');
const app = express();
const api = require('./public/assets/scripts')

const PORT = process.env.PORT||3001


app.use('/api', api);
app.use('/', (req,res) =>
res.sendFile(path.join(__dirname, 'index.html'));
);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);