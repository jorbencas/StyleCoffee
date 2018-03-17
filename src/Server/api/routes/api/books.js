var router = require('express').Router();

router.get('/', function(req, res) {
    console.log('Hola estas dentro');
    res.send('Hola esta dentro del archivo de Books enhorabuena.');
  });

  router.get('/:name', function(req, res) {
    res.send(`Hola ${req.params.name} esta dentro del archivo de Books enhorabuena.`);
  });

  module.exports = router;