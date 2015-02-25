var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET testPage. */
router.get('/testPage', function(req, res) {
  res.render('testPage', { title: 'testPage' });
});

/* GET testTwo. */
router.get('/testTwo', function(req, res) {
  res.render('testTwo', { title: 'testTwo' });
});

module.exports = router;
