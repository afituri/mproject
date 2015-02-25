var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('forms', { title: 'forms' });
});

module.exports = router;
