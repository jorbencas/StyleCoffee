var router = require('express').Router();
console.log(router + "Router.js");
router.use('/api', require('./api'));

module.exports = router;
