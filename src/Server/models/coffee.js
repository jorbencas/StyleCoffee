var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;
var passport = require('passport');

var CoffeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  kind:String,
  price: {type: Number, default: 0}
}, {timestamps: true});

CoffeeSchema.methods.toProfileJSONFor = function(user){
  return {
    id: this.id,
    name: this.name,
    image: this.image || '../../../dist/assets/photos/libro.png', 
    kind: this.kind,
    price: this.price,
  };
};

module.exports = mongoose.model('coffee',CoffeeSchema);