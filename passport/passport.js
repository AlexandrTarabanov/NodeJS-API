const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWTKEY
}
module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try{
                const user = await User.findByPk(payload.userId)

                if(user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (e){
                console.log(e)
            }

        })
    )
}