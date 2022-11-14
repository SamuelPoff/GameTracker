const {User} = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
    async Register(req, res){
        
        //Hash password
        const saltRounds = 10;
        bcrypt.hash(req.body.password, saltRounds, async function(error, hash){

            if(hash){

                try{
                    
                    //If hash was successful, create record in database using hashed password
                    const user = await User.create({email: req.body.email, password: hash});

                    const userJson = user.toJSON();
                    res.send({user: userJson, jwt: signUserJwt(userJson)});

                }
                catch(error){
                    console.log(`Sequelize Error occured: ${error.errors[0].message}`);
                    res.status(400).send({error: "This email account was already in use"});
                }

            }
            else{
                console.log("An error occurred while hashing password.");
                res.status(500).send({error: "An unexpected error occured while hashing password. Registration canceled"});
            }

        });

    },

    async Login(req, res){

        const email = req.body.email;
        const proposedPassword = req.body.password;

        const user = await User.findOne(
            {
                where: {email: email}    
            }
        );

        if(user === null){
            console.log(`Login request for USER with email: ${email}. No matching record in database.`);
            res.status(400).send({error: "No user with that email address is registered"});
        }
        else{

            //Check password
            bcrypt.compare(proposedPassword, user.password, function(err, result){

                if(result == true){
                    console.log("Passwords match, login successfully and get a JWT and all that jazz");
                    res.send({jwt: signUserJwt(user.toJSON())});
                }
                else{
                    console.log("Passwords do not match, sorry pal");
                    res.status(400).send({error: "Passwords did not match pal, youre done"});
                }

            });

        }

    }
}

function signUserJwt(user){

    return jwt.sign(user, config.authentication.secret, {expiresIn: 60*60*24*7});

}