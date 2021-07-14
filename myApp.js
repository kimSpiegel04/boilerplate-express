var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const absolutePath = __dirname + '/views/index.html';
const stylePath = __dirname + '/public';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) =>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

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

app.get('/now', (req,res,next) =>{
    req.time = new Date().toString();
    next();
},function(req,res){
    res.send({"time": req.time});
})

app.get('/:word/echo', (req,res) => {
    res.send({"echo" : req.params.word});
})


app.get('/name', (req, res) => {
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.json({
        "name": `${firstName} ${lastName}`
    })
});






























 module.exports = app;
