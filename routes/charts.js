var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('charts', { title: 'charts' });
});

module.exports = router;
