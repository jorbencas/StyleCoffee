require('dotenv/config')
const open = require('open');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port;
//const sendgrid = require('sendgrid');
//const api = require('./routes.js');

var http = require('http'),
path = require('path'),
methods = require('methods'),
errorhandler = require('errorhandler'),
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./dist'));
app.use(express.static('./'));
//app.use(sendgrid);
//app.use(require('./routes.js'));
/*
app.use('/api', api);
app.use(require('morgan')('dev'));
app.use(require('method-override')());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/stylecoffee', (err, res) => {
    if (err) {
      return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexión a la base de datos establecida...')

  

});
//mongoose.set('debug', true);
/*
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  /// error handlers
  
  // development error handler
  // will print stacktrace
  if (!isProduction) {
    app.use(function(err, req, res, next) {
      console.log(err.stack);
  
      res.status(err.status || 500);
  
      res.json({'errors': {
        message: err.message,
        error: err
      }});
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });
  */
app.post('/api',(req, res)=> {

  console.log('Hola'+ ' ' +req.body.name);
  const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
	  to: req.body.email,
	  from: 'jorbencas@gmail.com',
	  subject: 'StyleCoffe ha recibido tu sugerencia y la tendra en cuenta',
	  text: 'and easy to do anywhere, even with Node.js',
    html: 'Gracias por ponerte en contacto con nosotros, valoraremos tu propuesta.',
    };
    console.log(msg);
    sgMail.send(msg, function(error, info) {
        if (error) {
          res.status('401').json({
            err: info
          });
          console.log(err);
        } else {
          /*res.status('200').json({
            success: true
          });*/
          //console.log(success);
          return res.json({contact: req.body.email});
         
        }
      });
});
app.listen(port, () => {
    console.log(`Servidor corriendo por http://localhost/:${port}`);
    open(`http://localhost:${port}`);
});