var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next){

	var db = req.db;

	var nombre = req.body.name;
	var clave = req.body.password;
	


	var collections = db.get('yuusong');
	var find = collections.findOne({

		"nombre": nombre,
		"password": clave,

	}).success(function(doc){
		if(doc !== null){
			res.json({inserted: true});
		} else {
			res.json({error: "error"});
		}
			
			//res.render('login', {title: nombre});

	}).error(function(err){
		res.json({error: "hay un error"});
		
		console.log(err);
		
	});
console.log(find);
	if(find === null) {
		alert("no se registro");
	}

})

module.exports = router;
