const express = require('express');

const app = express();

const { PORT } = process.env;

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log('listening on %s', PORT);
})