var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('adminLogin', { title: 'adminLogin' });
});

module.exports = router;
