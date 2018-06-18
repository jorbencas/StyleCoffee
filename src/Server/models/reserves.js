var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;
var passport = require('passport');

var ReservaSchema = new mongoose.Schema({
  id: Number,
  title: String,
  email: String,
  telf:Number,
  dni:String,
  isbn:String,
  timestart:Number,
  timeend:Number,
  datestart:String,
  dateend:String,
}, {timestamps: true});

ReservaSchema.methods.toProfileJSONFor = function(user){
  return {
    id: this.id,
    name: this.name,
    email: this.email, 
    dni: this.dni,
    isbn: this.isbn,
    timestart: this.timestart,
    timeend: this.timeend,
    datestart: this.datestart,
    dateend: this.dateend
  };
};

mongoose.model('Reservas',ReservaSchema);