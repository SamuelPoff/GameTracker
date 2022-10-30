const express = require('express');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World');
    console.log("GET request to hello world");
});

app.listen(PORT, ()=>{
    console.log(`GameTracker backend listening on PORT: ${PORT}`);
});