var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var dotenv = require('dotenv').config();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
      done(null, user);
  });

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, function(email, password, done) {
  User.findOne({email: email}).then(function(user){
    if(!user || !user.validPassword(password)){
      return done(null, false, {errors: {'email or password': 'is invalid'}});
    }

    return done(null, user);
  }).catch(done);
}));

passport.use(new GoogleStrategy({
  clientID: '296386067636-kgpu5ue9u5f2glckvod86aratd8rp07s.apps.googleusercontent.com',
  clientSecret: 'Vlkt0kBRM4Q8GevKHgMkLDb-',
  callbackURL:'http://localhost:3001/api/auth/google/callback'
},
function(req, accessToken, refreshToken, profile, done) {
  //console.log(profile);
  User.findOne({email: profile.id}).then(function(user){
    //console.log(user);
    if(user){
      return done(null, user);
    }else{
      var nUser=new User();
      nUser.username=profile.name.givenName;
      nUser.email= profile.id;
      //console.log(nUser);
      nUser.save().then(function(){
        return done(null, user);
      }).catch(done);
    }
  }).catch(done);
}
));
