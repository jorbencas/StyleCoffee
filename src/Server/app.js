require('dotenv/config')
const open = require('open');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port;
//const sendgrid = require('sendgrid');

const morgan = require('morgan')

const api = require('./api/routes');
app.use(api);


var http = require('http'),
path = require('path'),
methods = require('methods'),
errorhandler = require('errorhandler'),
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./dist'));
app.use(express.static('./'));

app.use(require('morgan')('dev'));
//app.use(require('method-override')());
/*
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/stylecoffee', (err, res) => {
    if (err) {
      return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexión a la base de datos establecida...');
});
mongoose.set('debug', true);
*/

/// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  */
/*
app.post('/api/contact', function(req, res) {
    console.log('Hola'+ ' '+ req.body.name);
  });*/
app.listen(port, () => {
    console.log(`Servidor corriendo por http://localhost/:${port}`);
    open(`http://localhost:${port}`);
});