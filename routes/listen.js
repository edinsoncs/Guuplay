var express = require('express');
var router = express.Router();
//var cookieParser = require('cookie-parser');
var app = express()
//app.use(cookieParser())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listen', { title: 'Express' });
  //console.log("Cookies: ", req.cookies)
  //console.log("======================");

});

module.exports = router;
