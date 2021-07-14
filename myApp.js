var express = require('express');
var app = express();

const absolutePath = __dirname + '/views/index.html';
const stylePath = __dirname + '/public';


app.get('/', (req, res) => {
  // res.send('Hello Express');
    res.sendFile(absolutePath);
});

app.use('/public', express.static(stylePath));

app.get('/json', (req,res) => {
    res.json({"message": "Hello json"});
})


































 module.exports = app;
