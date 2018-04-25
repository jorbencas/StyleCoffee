var router = require('express').Router();
var mongoose = require('mongoose');
var Books = mongoose.model('Books');

console.log('Books');
// return a list of tags
router.get('/', function(req, res, next) {
  //console.log(Computer.find());
  Books.find().then(function(books){
   // console.log(books);
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
  console.log('hola');
  Books.find({ genere: req.params.param}).then(function (books) {
      return res.json({books: books});
  }).catch(next);
});


router.post('/', function(req,res,next){
  console.log('Saveing book' + req.body.title);

  var book = new Books();
  
  book.id = req.body.id;
  book.title = req.body.title;
  book.image = req.body.image;
  book.genere = req.body.genere;
  book.description = req.body.description;
  book.yearpublication = req.body.yearpublication;
  book.author = req.body.author;
  book.price = req.body.price;
  book.edition = req.body.edition;
  book.languaje = req.body.languaje;
  book.numpags = req.body.numpags,
  book.state = req.body.state,
  book.format = req.body.format,
  book.isbn = req.body.isbn,
  book.encuadernation=req.body.encuadernation

  book.save((err, bookStored) => {
    if(err) res.status(500).send(`Ha ocurrido un error al registrar el libro en la base de datos. $(err)`);
    res.status(200).send(bookStored);
  });
});

module.exports = router;
