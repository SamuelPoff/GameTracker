const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = (app)=>{

    app.post('/register', jsonParser, (req, res)=>{

        console.log(`User ${req.body.email} was registered with password: ${req.body.password}`);
        res.send(`User ${req.body.email} was registered`);
    
    });

}