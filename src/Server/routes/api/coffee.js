var router = require('express').Router();
var mongoose = require('mongoose');
var coffee = mongoose.model('Coffee');

console.log('Coffee');
// return a list of tags
router.get('/', function(req, res, next) {
  console.log(coffee.find());
  coffee.find().then(function(Coffee){
    console.log(Coffee);
    return res.json({Coffee: Coffee});
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