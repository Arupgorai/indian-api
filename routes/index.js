var express = require('express');
var mongoose = require('mongoose');
var Data = require('../model/pincode');
var config   = require("konphyg")(__dirname + "/../config")("all");
var db = config.MONGO_CONFIG.pin.DB;
var url= config.MONGO_CONFIG.pin.URL;
mongoose.connect(url+db);



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


router.get('/:pin', function(req, res, next){
	var pin = req.params.pin;
	var new_pin = parseInt(pin);
	console.log(new_pin, typeof new_pin);
	
	if(typeof new_pin !== 'number'){
		return res.json({message: "Wrong pincode format"});
	}

	var arr = new_pin.toString().split('').length;
	
	if(arr<6 || arr>6){
		return res.send("invalid pincode");
	}
	

	Data.find({ pincode : pin}, function(err, data){
		//console.log(data);
		if(err)
			throw err;
		if(data.length===0){
			res.status(403).send("data not found");
		}else{
			let resp = {
				status : 200,
				res : data,
				total : data.length
			}
			res.status(200).json(resp);
		}
	});

	
});



module.exports = router;
