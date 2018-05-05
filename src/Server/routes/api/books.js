var router = require('express').Router();
var mongoose = require('mongoose');
var Books = mongoose.model('Books');
var auth = require('../auth');

console.log('Books');

router.get('/', function(req, res, next) {
  Books.find().then(function(books){
    return res.json({books: books});
  }).catch(next);
});

router.get('/:id', function(req, res, next) {
  console.log('Getid' + req.params.id);
  Books.find({ id: req.params.id}).then(function (books) {
      return res.json({books: books});
  }).catch(next);
});

router.post('/:param', function(req, res, next) {
  Books.find({ genere: req.params.param}).then(function (books) {
      return res.json({books: books});
  }).catch(next);
});


router.put('/',auth.required, function(req,res,next){
  console.log('Saveing book' + req.body.title);

  var book = new Books();
  
  if(typeof req.body.book.id !== undefined){
    book.id = req.body.id;
  }else{
    book.id = 0;
  }

  if(typeof req.body.book.title !== undefined){
    book.title = req.body.title;
  }else{
    book.title = '';
  }

  if(typeof req.body.book.image === undefined){
    book.image = req.body.image;
  }else{
    book.image = '';
  }
  
  if(typeof req.body.book.genere === undefined){
    book.genere = req.body.genere;
  }else{
    book.genere = [];
  }

  if(typeof req.body.book.description === undefined){
    book.description = req.body.description;
  }else{
    book.description = '';
  }

  if(typeof req.body.book.yearpublication === undefined){
    book.yearpublication = req.body.yearpublication;
  }else{
    book.yearpublication = '';
  }

  if(typeof req.body.book.author === undefined){
    book.author = req.body.author
  }else{
    book.author = '';
  }

  if(typeof req.body.book.price !== undefined){
    book.price = req.body.price
  }else{
    book.price = 0;
  }
  
  if(typeof req.body.book.edition !== undefined){
    book.edition = req.body.edition
  }else{
    book.edition = '';
  }

  if(typeof req.body.book.languaje !== undefined){
    book.languaje = req.body.languaje
  }else{
    book.languaje = '';    
  }
  
  if(typeof req.body.book.numpags !== undefined){
    book.numpags = req.body.numpags
  }else{
    book.numpags = 0;    
  }
  
  if(typeof req.body.book.state !== undefined){
    book.state = req.body.state
  }else{
    book.state = '';    
  }
  
  if(typeof req.body.book.format !== undefined){
    book.format = req.body.format;
  }else{
    book.format = '';   
  }

  if(typeof req.body.book.isbn !== undefined){
    book.isbn = req.body.isbn;
  }else{
    book.isbn = '';    
  }

  if(typeof req.body.book.encuadernation !== undefined){
    book.encuadernation=req.body.encuadernation
  }else{
    book.encuadernation = '';    
  }
  
  book.save((err, bookStored) => {
    if(err) res.status(500).send(`Ha ocurrido un error al registrar el libro en la base de datos. $(err)`);
    res.status(200).send(bookStored);
  });
});

router.put('/book',auth.required, function(req,res,next){
  console.log('Saveing book' + req.body.title);

  var book = new Books();
  
  if(typeof req.body.book.id !== undefined){
    book.id = req.body.id;
  }else{
    book.id = 0;
  }

  if(typeof req.body.book.title !== undefined){
    book.title = req.body.title;
  }else{
    book.title = '';
  }

  if(typeof req.body.book.image === undefined){
    book.image = req.body.image;
  }else{
    book.image = '';
  }
  
  if(typeof req.body.book.genere === undefined){
    book.genere = req.body.genere;
  }else{
    book.genere = [];
  }

  if(typeof req.body.book.description === undefined){
    book.description = req.body.description;
  }else{
    book.description = '';
  }

  if(typeof req.body.book.yearpublication === undefined){
    book.yearpublication = req.body.yearpublication;
  }else{
    book.yearpublication = '';
  }

  if(typeof req.body.book.author === undefined){
    book.author = req.body.author
  }else{
    book.author = '';
  }

  if(typeof req.body.book.price !== undefined){
    book.price = req.body.price
  }else{
    book.price = 0;
  }
  
  if(typeof req.body.book.edition !== undefined){
    book.edition = req.body.edition
  }else{
    book.edition = '';
  }

  if(typeof req.body.book.languaje !== undefined){
    book.languaje = req.body.languaje
  }else{
    book.languaje = '';    
  }
  
  if(typeof req.body.book.numpags !== undefined){
    book.numpags = req.body.numpags
  }else{
    book.numpags = 0;    
  }
  
  if(typeof req.body.book.state !== undefined){
    book.state = req.body.state
  }else{
    book.state = '';    
  }
  
  if(typeof req.body.book.format !== undefined){
    book.format = req.body.format;
  }else{
    book.format = '';   
  }

  if(typeof req.body.book.isbn !== undefined){
    book.isbn = req.body.isbn;
  }else{
    book.isbn = '';    
  }

  if(typeof req.body.book.encuadernation !== undefined){
    book.encuadernation=req.body.encuadernation
  }else{
    book.encuadernation = '';    
  }
  
  book.save((err, bookStored) => {
    if(err) res.status(500).send(`Ha ocurrido un error al registrar el libro en la base de datos. $(err)`);
    res.status(200).send(bookStored);
  });
});

router.delete('/',auth.required, function(req,res,next){

});

router.delete('/book',auth.required, function(req,res,next){

}),

module.exports = router;
