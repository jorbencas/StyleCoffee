var router = require('express').Router();

router.use('/', require('./users'));
router.use('/profiles', require('./profiles'));
router.use('/contact', require('./contact'));
router.use('/coffees', require('./coffee'));
router.use('/books', require('./books'));
router.use('/charge', require('./charge'));
router.use('/reserve',require('./reserves')),

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;