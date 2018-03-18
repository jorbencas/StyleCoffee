var router = require('express').Router();
var mongoose = require('mongoose');
var Books = mongoose.model('Books');

console.log('Books');
// return a list of tags
router.get('/', function(req, res, next) {
  //console.log(Computer.find());
  books.find().then(function(books){
    console.log(books);
    return res.json({books: books});
  }).catch(next);
});
/*
router.post('/:id', function(req, res, next) {
  console.log('Getid' + req.params.id);
  Computer.find({ _id: req.params.id}).then(function (computer) {
      return res.json({computer: computer});
  }).catch(next);
});

router.get('/:type', function(req, res, next) {
  console.log('hola');
  Computer.find({ type: req.params.type}).then(function (computer) {
      return res.json({computer: computer});
  }).catch(next);
});*/

module.exports = router;
