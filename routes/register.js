var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register | YuuSong' });
});

router.post('/', function(req, res, next){

	var db = req.db;

	var nombre = req.body.nombre;
	var surname = req.body.surname;
	var nickname = req.body.nickname;
	var email = req.body.email;
	var password = req.body.password;

	var collections = db.get('yuusong');
	collections.insert({

		"nombre": nombre,
		"surname": surname,
		"nickname": nickname,
		"email": email,
		"password": password

	}).success(function(doc){
			res.json({inserted: true});

	}).error(function(err){
		res.json({error: "hay un error"});
		console.log(err);
		
	});

})

module.exports = router;
