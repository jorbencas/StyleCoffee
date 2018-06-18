var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');
var coffee = mongoose.model('Coffee');
var Books = mongoose.model('Books');
var stripe = require("stripe")(process.env.STRYPE_API_KEY);
console.log('Users');
let numeral = require('numeral');
const sgMail = require('@sendgrid/mail');

router.post("/", (req, res) => {
    let cart =req.body.carrito;
    console.log(cart);
    let pricestripe = 0;

    cart.forEach((element) => {
      element.kind === 'books' ?
        Books.find({id: element.id}).then(function(book){
            console.log(book[0].price)
            pricestripe = pricestripe + book[0].price;
            console.log( 'Hola' + pricestripe);
        }):
        coffee.find({id: element.id}).then((coffee) => {
            console.log(coffee[0].price)
            pricestripe = pricestripe + coffee[0].price +'.00';
            console.log( 'Hola' + pricestripe);
        });
    })

    stripe.customers.create({
        email:'jorbencas@gmail.com',
        source: cart[0].token
      })
      .then(customer => {
            console.log('Adeu');
          stripe.charges.create({
            amount: numeral(pricestripe).format('0.00').replace('.', ''),
            description: "Sample Charge",
               currency: "eur",
               customer: customer.id
          }).then(
            console.log('El pago se ha hecho satisfactoriamente!!!'), 
            cart.forEach((element) => {
              console.log('Gereted');
              if(element.kind === 'books'){
                console.log(element.id);
                Books.update({id: element.id},{$desc:{stock:1}});
              } 
            })
          )
      }
    )
      .then( () => {
  
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'jorbencas@gmail.com',
        from: "jorbencas@gmail.com",
        subject: 'Notificación del cobro de su pedido hecho ha Stylecoffee',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Gracias por confiar en nosotros, tu pedido ha sido de ` + pricestripe + '€' + ` puedes pasar ha recoguer lo cuando quieras </strong>`,
        };
        sgMail.send(msg, function(error, info) {
            if (error) {
              res.status('401').json({err: info});
            } else {
              res.status('200').json({success: true})
              res.redirect('http://localhost:3001')
            }
          })
        } );
    });
  
    module.exports = router;