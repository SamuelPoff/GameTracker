const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerValidation = require('./validation/AuthenicationControllerValidation');

module.exports = (app)=>{

    app.post('/register', 
        jsonParser,
        AuthenticationControllerValidation.Register,
        AuthenticationController.Register);
    
    

}