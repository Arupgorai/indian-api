var express = require('express');
var mongoose = require('mongoose');
var bankData = require('../model/bank');
var config   = require("konphyg")(__dirname + "/../config")("all");
var db = config.MONGO_CONFIG.bank.DB;
var url= config.MONGO_CONFIG.bank.URL;

mongoose.connect(url+db);
console.log(url+db);



console.log("server started...");


var router = express.Router();

router.get('/', function(req, res, next) {
	let resp = {
		status : "OK",
		res : {
			message : "Welcome to India API."
		}
	}
	res.json(resp);
});


router.get('/:ifsc', function(req, res, next){
	var new_ifsc = req.params.ifsc;
	if(new_ifsc){
		bankData.find({ifsc : new_ifsc}, function(err, data){
			console.log(data);
			if(err)
				throw err;
			if(data.length===0){
				res.status(403).send("data not found");
			}else{
				var resp = {
					status: 200,
					res: data,
					total: data.length
				}
				res.status(200).json(resp)
			}
		});
	}
});






module.exports = router;
