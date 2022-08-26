
var express = require('express');
var path = require('path');
const port = 5000

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/submit', (req, res) => {
  const form = req.body;

  console.log(form)

  res.status(200).send({ message: 'Submission Received successfully!' })
})

module.exports = app;
