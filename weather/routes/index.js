var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('angular2');
  // res.render('view.html');
});

router.get('/angular2', function(req, res, next) {
  res.render('angular2');
});

module.exports = router;
