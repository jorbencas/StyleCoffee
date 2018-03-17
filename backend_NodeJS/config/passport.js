var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

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

// 

passport.use(new FacebookStrategy({
  clientID: 'ID',
  clientSecret: 'APY-KEY',
  callbackURL: 'http://localhost:8080/api/auth/facebook/callback'
},
function(req, accessToken, refreshToken, profile, done) {
  console.log(profile);
  User.findOne({email: profile.id}).then(function(user){
    if(user){
      return done(null, user);
    }else{
      nUser=new User();
      nUser.username=profile.displayName;
      nUser.email= profile.id;
      console.log(nUser);
      nUser.save().then(function(){
        return done(null, user);
      }).catch(done);
    }
  }).catch(done);
}
));


