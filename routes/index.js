var express = require('express');
var router = express.Router();
var i18n = require('i18n');

/* GET home page. */
router.get('/', function(req, res) {
  setlang(req,res);
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
// set a cookie to requested locale
router.get('/:locale', function (req, res) {
  setdeflan(req,res);
  res.redirect("/");
});

function setlang(req,res){
  if(!req.cookies.locale)
    req.cookies.locale ="ar";
  i18n.setLocale(req.cookies.locale);
  res.cookie('locale', req.cookies.locale);
}
function setdeflan(req,res){
  i18n.setLocale(req.params.locale);
  req.session.language = req.params.locale;
  res.cookie('locale', req.params.locale);
}

module.exports = router;
