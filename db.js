var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:59865/local', function(err, db){

	db.collection('yuusong')


});