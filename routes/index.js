var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('formformat', { title: 'Store Validation' });
  res.send("HOME PAGE");
});

module.exports = router;
