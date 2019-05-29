const express = require('express');
const router = express.Router;
// const User = require('database right here')

module.exports = function(passport){
    //when a user makes a post request to signup on our site
    router.post('/signup', (req, res) => {
        //grabbing the username and password out the body
        var body = req.body,
            username = body.username,
            password = body.password;
            //finding the username is our DB
            //might have to change up this function slightly because in the video he is using mongoose DB
        User.findOne({username: username}, function(err, doc){
            if(err){
                //if main error send the error to user
                res.status(500).send('error occured');
            } else {
                if(doc){
                    //if the username already exists send the same error
                    res.status(500).send('Username already exists');
                }
                else {
                    //if all credentials meet, create a new User
                    var record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password);
                    record.save((err, user) => {
                        if(err){
                            res.status(500).send('db error');
                        } else {
                            res.send(user)
                        }
                    })
                        //right here is where you would create the password
                        //for right now i'm going to leave this blank because on the DB is where we need to use bcrypt
                        //we need to hash the password using bcrypt
                        //and also need to compare the Hashed password with regular password 
                        //we also will need a main folder like a app.js that I assume is being created as I type this
                        //in there we will need to require most of these files, especially the routes
                }
            }
        })
    });

    //right here we are authenticating an existing user that is in our DB
    router.post('/login', passport.authenticate('local', {
        failureRedirect:'/login',
        successRedirect:'/profile',
    }), function(req, res){
        res.send('hey')
    })
    return router;
};
