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



router.post('/:id', function(req, res, next) {
  console.log('Getid' + req.params.id);
  coffee.find({ id: req.params.id}).then(function (coffee) {
      return res.json({Coffee: coffee});
  }).catch(next);
});

router.get('/:kind', function(req, res, next) {
  console.log('hola' + req.params.kind);
  coffee.find({ kind: req.params.kind}).then(function (coffee) {
    return res.json({Coffee: coffee});
  }).catch(next);
});

module.exports = router;