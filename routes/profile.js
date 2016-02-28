var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/:name', function(req, res, next) {

  var db = req.db;

  var collectionsUser = db.get('yuusong');

  var find = collectionsUser.findOne({"nombre": "tasa"});

  console.log("la db: " +find);

  var insertKey = req.params.name;

  /*if(find[insertKey]){
  	res.render('profile', {
  		name: find[insertKey].nombre
  	});
  }*/

  res.render('profile', { find: 'Edinson', title: 'Mi Cuenta | Yuusong' });

});



module.exports = router;
