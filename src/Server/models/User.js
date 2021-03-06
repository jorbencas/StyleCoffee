var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;
var passport = require('passport');

var UserSchema = new mongoose.Schema({
  id:Number,
  username: String,
  email: String,
  image: String,
  name: String,
  apellidos: String,
  dni: String,
  date_birthday: String,
  hash: String,
  salt: String,
  role: String,
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    role:this.role,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function(){
  return {
    id:this.id,
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    name: this.name,
    apellidos: this.apellidos,
    dni: this.dni,
    date_birthday: this.date_birthday,
    image: this.image,
    role: this.role
  };
};

UserSchema.methods.toProfileJSONFor = function(user){
  return {
    id:this.id,
    username: this.username,
    email: this.email,
    image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
    name: this.name,
    apellidos: this.apellidos,
    dni: this.dni,
    date_birthday: this.date_birthday,
    role: this.role
  };
};



mongoose.model('User', UserSchema);
