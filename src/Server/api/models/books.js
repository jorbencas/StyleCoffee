var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
/*var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;
var passport = require('passport');*/

var BooksSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  genere:String,
  description: {},
  yearpublication: String,
  author: String,
  price: String,
  edition: String,
  languaje: String,
}, {timestamps: true});

BooksSchema.methods.toProfileJSONFor = function(user){
  return {
    id: this.id,
    title: this.title,
    image: this.image || '../../../dist/assets/photos/libro.png', 
    genere: this.genere,
    description: this.description,
    yearpublication,: this.yearpublication,
    author: this.author,
    title: this.title,
    price: this.price,
    languaje: this.languaje,
  };
};



mongoose.model('Books',BooksSchema);