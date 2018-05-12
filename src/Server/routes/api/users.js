var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var coffee = mongoose.model('Coffee');
var Books = mongoose.model('Books');
var auth = require('../auth');
var stripe = require("stripe")(process.env.STRYPE_API_KEY);
console.log('Users');

router.get('/users',auth.required, function(req, res, next){
  res.send('Hola Users');
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

router.put('/user', auth.required, function(req, res, next){
  //console.log(req.body.user);
  User.findById(req.payload.id).then(function(user){
    //console.log(user);
    if(!user){ return res.status(422)}
    
    // only update fields that were actually passed...
    if(typeof req.body.user.username !== 'undefined'){
      user.username = req.body.user.username;
    }
    if(typeof req.body.user.email !== 'undefined'){
      user.email = req.body.user.email;
    }
    
    if(typeof req.body.user.image !== 'undefined'){
      user.image = req.body.user.image;
    }
    if(typeof req.body.user.password !== 'undefined'){
      user.setPassword(req.body.user.password);
    }

    if(typeof req.body.user.date_birthday !== 'undefined'){
      user.date_birthday = req.body.user.date_birthday;
    }

    if(typeof req.body.user.name !== 'undefined'){
      user.name = req.body.user.name;
    }
    if(typeof req.body.user.apellidos !== 'undefined'){
      user.apellidos = req.body.user.apellidos;
    }
    if(typeof req.body.user.dni !== 'undefined'){
      user.dni = req.body.user.dni;
    }

    
    return user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    });
  }).catch(next);
});
/*
router.post('/users', function(req, res, next){
  
  let memorystore = req.sessionStore;
  let sessions = memorystore.sessions;
  let sessionUser;
  for(var key in sessions){
    sessionUser = (JSON.parse(sessions[key]).passport.user);
  }
    var user = new User();
    user.email = sessionUser.email;
    user.username = sessionUser.username;

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json('fail');
    }
})
;
*/
router.post('/users/login', function(req, res, next){
console.log(req.body.user.username + " " + req.body.user.password);
  
  if(!req.body.user.username){
    return res.status(422).json({errors: {Username: "can't be blank"}});
  }

  if(!req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }

  User.find({password: req.body.user.password}).then(function(user){
    //console.log(user);
    if(!user){ 
      return res.sendStatus(401); 
    }else{
      passport.authenticate('local', {session: false}, function(err, user, info){
        user = new User();
        user.username = req.body.user.username;
        user.setPassword(req.body.user.password);

        if(err){ return next(err); }
        if(user){
          //console.log(user);
          user.token = user.generateJWT();
          return res.json({user: user.toAuthJSON()});
        } else {
          return res.status(422).json(info);
        }
      })(req, res, next);
    }
  }).catch(next);

  
});
/*
router.post('/users', function(req, res, next){

    console.log(req.body.user);
  var user = new User();

  user.username = req.body.user.username;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);
  user.image = '';
  user.dni = '';
  user.date_birthday = '';
  user.name = req.body.user.username;
  user.apellidos = '';

  user.save().then(function(){
    return res.json({user: user.toAuthJSON});
  }).catch(next);
});
*/
router.post('/users', function(req, res, next){
  var user = new User();

  user.username = req.body.user.username;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);

  user.save().then(function(){
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

/*----GOOGLE------*/
router.get('/SigUpGoogle',passport.authenticate('google',{scope: 'profile'}));//passport.authenticate('google'));
router.get('/auth/google/callback',
  passport.authenticate('google'),
   function(req, res) {
   
    return res.redirect('/');
  });

/*----TWITTER----*/
router.get('/api/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback',
    passport.authenticate('twitter',
    { successRedirect: 'http://localhost:3001/', failureRedirect: '/' }));


router.post("/charge", (req, res) => {
  
    console.log(req.body.card);
    let cart =req.body.card;

    stripe.customers.create({
       email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer => {
      if(typeof cart !== [] ){
        card.forEach(element => {
          if(element.kind === 'Book'){
            Books.findById({id: element.id}).then(
              stripe.charges.create({
                amount: 322,
                description: "Sample Charge",
                   currency: "eur",
                   customer: customer.id
              })
              .then(
                 //Computer.update({ id:req.body.payment}, {$inc:{"shop.0.stock":10}})  
                // computer.save()
              )
            )
          }else if(element.kind === 'coffee'){
            coffee.findById().then()
          }
        });
      }else if(typeof cart === {} ) {
        if(cart.kind === 'Book'){
          Books.findById({id: element.id}).then()
        }else if(cart.kind === 'coffee'){
          coffee.findById().then()
        }
      }
    })
    .then( charge => res.redirect() );
  });


module.exports = router;