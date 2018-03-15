var router = require('express').Router();

console.log('Contact');
// return a list of tags
router.post('/api', function(req, res) {
    console.log(req);
});

module.exports = router;