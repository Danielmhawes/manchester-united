var manchesterunitedJSON = require('../db.json');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Manchester United' })
  
});


module.exports = router;