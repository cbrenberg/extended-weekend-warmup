console.log('Wooooo');
const express = require('express');
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);
})

app.get('/greeting', (req, res) => {
  res.send('Boo');
})