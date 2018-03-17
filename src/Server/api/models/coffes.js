var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
/*var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;
var passport = require('passport');*/

var CoffeeSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  king:String,
  price: String.
}, {timestamps: true});

CoffeeSchema.methods.toProfileJSONFor = function(user){
  return {
    id: this.id,
    anem: this.name,
    image: this.image || '../../../dist/assets/photos/libro.png', 
    kind: this.kind,
    price: this.price,
  };
};



mongoose.model('Coffee',CoffeeSchema);