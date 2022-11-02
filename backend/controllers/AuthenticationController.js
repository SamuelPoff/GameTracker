const {User} = require('../models');

module.exports = {
    async Register(req, res){

        try{
            
            const user = await User.create(req.body);
            console.log(`New user registered: email: ${req.body.email}`)
            res.send(user.toJSON()); 
        }
        catch(error){
            console.log(error);
            res.status(400).send({error: "This email account was already in use"});
        }
        
         
    }
}