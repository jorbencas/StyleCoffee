var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;
var passport = require('passport');

var BooksSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  genere:{
    type:[String]
  },
  description: String,
  yearpublication: String,
  author: String,
  price: {type: Number, default: 0},
  edition: String,
  languaje: String,
  numpags:{type: Number, default: 0},
  state:String,
  format:String,
  isbn:String,
  encuadernation:String,
  stock:{type: Number, default:0}
}, {timestamps: true});

BooksSchema.methods.toProfileJSONFor = function(user){
  return {
    id: this.id,
    title: this.title,
    image: this.image || '../../../dist/assets/photos/libro.png', 
    genere: this.genere,
    description: this.description,
    yearpublication: this.yearpublication,
    author: this.author,
    edition: this.edition,
    price: this.price,
    languaje: this.languaje,
    numpags:this.numpags,
    state:this.state,
    format:this.format,
    isbn:this.isbn,
    encuadernation:this.encuadernation
  };
};

mongoose.model('Books',BooksSchema);