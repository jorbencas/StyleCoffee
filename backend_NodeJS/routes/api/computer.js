var router = require('express').Router();
var mongoose = require('mongoose');
var Computer = mongoose.model('Computer');

console.log('Computer');
// return a list of tags
router.get('/', function(req, res, next) {
  //console.log(Computer.find());
  Computer.find().then(function(computer){
    console.log(computer);
    return res.json({computer: computer});
  }).catch(next);
});

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
});

module.exports = router;
