const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Project Palmtree!');
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`);
});