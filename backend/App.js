const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const jsonParser = bodyParser.json();

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello World');
    console.log("GET request to hello world");
});

app.post('/register', jsonParser, (req, res)=>{

    console.log(`User ${req.body.email} was registered with password: ${req.body.password}`);
    res.send(`User ${req.body.email} was registered`);

});

app.listen(PORT, ()=>{
    console.log(`GameTracker backend listening on PORT: ${PORT}`);
});