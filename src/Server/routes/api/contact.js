var router = require('express').Router();

console.log('Contact');

router.post('/', function(req, res) {

  const sgMail = require('@sendgrid/mail');
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
	  to: req.body.email,
	  from: req.body.email,
	  subject: 'Sending with SendGrid is Fun',
	  text: 'and easy to do anywhere, even with Node.js',
	  html: '<strong>Welcome to Computer Shop</strong>',
    };
    console.log(msg);
    sgMail.send(msg, function(error, info) {
        if (error) {
          res.status('401').json({
            err: info
          });
        } else {
          res.status('200').json({
            success: true,
            contact: req.body
          });
        }
      });
});

module.exports = router;