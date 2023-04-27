const express = require('express');
const app = express();

app.use(express.static('TECHUB'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/about.html', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
