const localStrategy = require('passport-local').Strategy;
// const User = require('database right here')

module.exports = function(passport) {
    passport.serializeUser((user, done) => {
        done(null, user);
    })
    passport.deserializeUser((user, done) => {
        done(null, user);
    })

    passport.use(new localStrategy((username, password, done) => {
        User.findOne({username:username}, function(err, doc) {
            if(err) {
                done(err);
            } else {
                if(doc){
                    //if document is present then we need to verify the password as well
                    var valid = doc.comparePassword(password, doc.password);
                    if(valid){
                        //if the password is valid we can pass on the doc
                        done(null, {
                            username:doc.username,
                            password:doc.password
                        })
                    } else {
                        //if its not valid do not pass on the doc
                        done(null, false)
                    }
                } else {
                    done(null, false)
                }
            }
        })
    }))
}