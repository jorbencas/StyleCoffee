var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload user profile on routes with ':username'
router.param('username', function(req, res, next, username){
  User.findOne({username: username}).then(function(user){
    if (!user) { 
      return res.sendStatus(404).send('EL usuario no existe corrige lo'); 
    }else{
      req.profile = user;
      return next();
    }
   
  }).catch(next);
});

router.get('/:username',auth.optional, function(req, res, next){
  if(req.payload){
    console.log(req.payload.id);
    User.findById(req.payload.id).then(function(user){
      console.log(user);
      if(!user){ return res.json({profile: req.profile.toProfileJSONFor(false)}); }

      return res.json({profile: req.profile.toProfileJSONFor(user)});
    });
  } else {
    return res.json({profile: req.profile.toProfileJSONFor(false)});
  }
});


module.exports = router;
