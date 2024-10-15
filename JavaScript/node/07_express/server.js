const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const porta = 3000;

app.listen(porta, () => {
  console.log(`http://localhost:${porta}`);
});