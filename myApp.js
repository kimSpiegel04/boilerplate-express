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
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({"message": "Hello json"});
    } else {
        res.json({"message": "HELLO JSON"});
    }
})

































 module.exports = app;
