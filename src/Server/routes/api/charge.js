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

router.post("/", (req, res) => {
    let cart =req.body.carrito;
    console.log(cart);
    let pricestripe = 0;

    cart.forEach((element) => {
      element.kind === 'books' ?
        Books.find({id: element.id}).then(function(book){
            console.log(book[0].price)
            pricestripe = pricestripe + book[0].price +'.00';
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
              element.kind === 'books' 
                Books.update({id: element.id},{$desc:{stock:1}});
            })
          )
      }
    )
      .then( () => {res.redirect('/')} );
    });
  
    module.exports = router;