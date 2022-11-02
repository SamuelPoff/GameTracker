const {User} = require('../models');

module.exports = {
    async Register(req, res){

        try{
            const user = await User.create(req.body);
            res.send(user.toJSON()); 
        }
        catch(error){
            res.status(400).send({error: "This email account was already in use"});
        }
        
         
    }
}