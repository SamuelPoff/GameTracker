const Joi = require('joi');

module.exports = {

    //Validate email field etc
    Register(req, res, next){

        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        });

        const {error, value} = schema.validate(req.body);

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({error: "You must provide a valid email address"});
                    break;
                case 'password':
                    res.status(400).send({error: "Password was in an invalid format"});
                    break;
                default:
                    res.status(400).send({error: "Error occured with registration req"});
            }
        }
        else{
            next();
        }

    }

}