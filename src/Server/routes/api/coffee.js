var router = require('express').Router();
var mongoose = require('mongoose');
var coffee = mongoose.model('Coffee');
var auth = require('../auth');

console.log('Coffee');

router.get('/', function(req, res, next) {
  coffee.find().then(function(Coffee){
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

router.put('/',auth.required, function(req, res, next) {
  console.log('Create coffee');
  coffee = new coffee();
});

router.put('/coffee',auth.required, function(req, res, next) {
  console.log('Create coffee');
  coffee = new coffee();
});

router.delete('/',auth.required, function(req, res, next) {
  console.log('Create coffee');
  coffee.remove({}, function(err){
    if (err) {
      res.status(401).send('Ertro els borrar el libro!!');
    }else{
      res.status(200).send('Swe ha borrado correctamente.');
    }
  });
});

router.delete('/coffee/:coffee',auth.required, function(req, res, next) {
  coffee.remove({id:req.params.coffee}).then( function(err){
    if (err) {
      res.status(401).send('Ertro els borrar el libro!!');
    }else{
      res.status(200).send('Swe ha borrado correctamente.');
    }
  });
});

module.exports = router;