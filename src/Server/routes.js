var router = require('express').Router();
console.log(router + "Router.js");
router.use('./api/contact', require('./api/contact'));

module.exports = router;