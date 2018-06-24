var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose'),
    dotenv= require('dotenv').config();
const open = require('open');
var isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT;
var colors = require('colors');

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static('./dist'));
app.use(express.static('./'));
app.use(session({ secret: 'StyleCoffee', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}

if(isProduction){
  mongoose.connect('mongodb://<jorbencas>:<Karanlik123?>@ds161610.mlab.com:61610/stylecoffee', (err, res) => {
    if (err) throw err
    console.log('Conectado a la Base de datos styleCoffee'.cyan)
  });
} else {
  mongoose.connect('mongodb://localhost/stylecoffee', (err, res) => {
    if (err) throw err
    console.log('Conectado a la Base de datos styleCoffee'.cyan)
  });
  mongoose.set('debug', true);
}

require('./models/books');
require('./models/coffee');
require('./models/User');
require('./config/passport');
require('./models/reserves');

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes'));

/// error handlers
/*
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
*/
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

app.listen(port || 3001, () => {
  console.log(`Servidor corriendo por http://localhost/:${port}`.green);
  open(`http://localhost:${port}/`);
});