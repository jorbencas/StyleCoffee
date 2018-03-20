var router = require('express').Router();
var mongoose = require('mongoose');
var coffee = mongoose.model('coffee');

console.log('Coffee');
// return a list of tags
router.get('/', function(req, res, next) {
  //console.log(coffee.find());
  coffee.find().then(function(Coffee){
    //console.log(Coffee);
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
*/
router.get('/:search', function(req, res, next) {
  console.log('hola');
  /*coffee.find({ type: req.params.search}).then(function (coffee) {
    return res.json({Coffee: Coffee});
  }).catch(next);*/
});

module.exports = router;