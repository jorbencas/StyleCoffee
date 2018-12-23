var router = require('express').Router();
var mongoose = require('mongoose');
var Reserves = mongoose.model('Reservas');
var auth = require('../auth');
const sgMail = require('@sendgrid/mail');

console.log('Reserves');

router.get('/', function(req, res, next) {
    Reserves.find().then(function(reserves){
    return res.json({reserves: reserves});
  }).catch(next);
});

router.get('/:id', function(req, res, next) {
  console.log('Getid' + req.params.id);
  Reserves.find({ id: req.params.id}).then(function (reserves) {
      return res.json({reserves: reserves});
  }).catch(next);
});

router.put('/',auth.optional, function(req,res,next){
  console.log('Saveing Reserves ' + req.body.reserve.id);
  var reserves = new Reserves();

    reserves.id = req.body.reserve.id;
    reserves.dni = req.body.reserve.dni;
    reserves.title = req.body.reserve.title;
    reserves.timestart = req.body.reserve.timestart;
    reserves.timeend = req.body.reserve.timeend;
    reserves.datestart = req.body.reserve.datestart;
    reserves.tlf = req.body.reserve.tlf
    reserves.email = req.body.reserve.email
    reserves.isbn = req.body.reserve.isbn;
    reserves.dateend = req.body.reserve.dateend

  reserves.save((err, reserveStored) => {
    console.log(reserveStored);
    if(err) res.status(500).json({errors: {error:`Ha ocurrido un error al registrar el libro en la base de datos.` + err}});
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'jorbencas@gmail.com',
        from:  req.body.reserve.email,
        subject: 'Reserva realizada',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Estimado cliente. <br> Gracias por confiar en nosotros, su pedido ha sido de realizado, puede pasar a recoguer lo cuando quieras </strong>`,
        };
        sgMail.send(msg, function(err, info) {
            if (err) {
              res.status('401').json({errors: {error: info}});
            } else {
              res.status('200').json({success: true})
              res.redirect('http://localhost:3001')
            }
          })
  });
});

router.put('/reserve',auth.required, function(req,res,next){
  console.log('Saveing reserve' + req.body.reserve.stock);

  
  var reserve = new reserves();
  
  if(typeof req.body.reserve.id !== 0){
    reserve.id = req.body.reserve.id;
  }

  if(typeof req.body.reserve.title !== undefined){
    reserve.title = req.body.reserve.title;
  }

  if(typeof req.body.reserve.image !== undefined){
    reserve.image = req.body.reserve.image;
  }
  
  if(typeof req.body.reserve.genere !== Object){
    reserve.genere.push(req.body.reserve.genere);
  }
  

  if(typeof req.body.reserve.description !== undefined){
    reserve.description = req.body.reserve.description;
  }

  if(typeof req.body.reserve.yearpublication !== undefined){
    reserve.yearpublication = req.body.reserve.yearpublication;
  }

  if(typeof req.body.reserve.author !== undefined){
    reserve.author = req.body.reserve.author;
  }

  if(typeof req.body.reserve.price !== 0){
    reserve.price = req.body.reserve.price;
  }
  
  if(typeof req.body.reserve.edition !== undefined){
    reserve.edition = req.body.reserve.edition ;
  }

  if(typeof req.body.reserve.languaje !== undefined){
    reserve.languaje = req.body.reserve.languaje;  
  }
  
  if(typeof req.body.reserve.numpags !== 0){
    reserve.numpags = req.body.reserve.numpags;   
  }
  
  if(typeof req.body.reserve.state !== undefined){
    reserve.state = req.body.reserve.state;   
  }
  
  if(typeof req.body.reserve.format !== undefined){
    reserve.format = req.body.reserve.format;
 
  }

  if(typeof req.body.reserve.stock !== 0){
    reserve.stock = req.body.reserve.stock;
  }

  if(typeof req.body.reserve.encuadernation !== undefined){
    reserve.encuadernation=req.body.reserve.encuadernation;
  }
  
  reserve.save((err, reserveStored) => {
    if(err) res.status(500).send(`Ha ocurrido un error al registrar el libro en la base de datos. $(err)`);
    res.status(200).send({reserves:reserveStored});
  });
});

router.delete('/',auth.required, function(req,res,next){
  reserves.remove({},function(error){
    if (error) {
      res.status(401).send('Ertro els borrar el libro!!');
    }else{
      res.status(200).send('Swe ha borrado correctamente.');
    }
  });
});

router.delete('/reserve/:reserve',auth.required, function(req,res,next){
  console.log(req.params.reserve);
  reserves.remove({id:req.params.reserve},function(err){
    if (err) {
      res.status(401).send('Ertro els borrar el libro!!');
    }else{
      res.status(200).send('Swe ha borrado correctamente.');
    }
  });

}),

module.exports = router;
