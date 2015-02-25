var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('adminPage', { title: 'adminPage' });
});

module.exports = router;
