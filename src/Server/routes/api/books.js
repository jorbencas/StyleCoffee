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

router.post('/:id', function(req, res, next) {
  console.log('Getid' + req.params.id);
  Books.find({ id: req.params.id}).then(function (books) {
      return res.json({books: books});
  }).catch(next);
});

router.get('/:genere', function(req, res, next) {
  console.log('hola');
  Books.find({ genere: req.params.search}).then(function (books) {
      return res.json({books: books});
  }).catch(next);
});

module.exports = router;
