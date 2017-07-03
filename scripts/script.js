const mongoose 	= require("mongoose");
const async 	= require("async");

var Schema = require("./schema");
var mongoURI;

mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server." ,ref);
  return readFile();
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

mongoURI = "mongodb://localhost/zip_db";

mongoose.connect(mongoURI);



function readFile(){
   let file = require("../c.json");
   
   try{
   	 console.log(file.length);
   	 if(file.length){
   	 	async.eachSeries(file,function(item,cb){
			   	 var data = new Schema(item);
			   	 data.save(function(err){
			   	 	console.log(item);
			   	 	if(err){
			   	 		console.log(err);
			   	 	}
			   	 	cb();
			   	 });   	 		
   	 	},function(){

   	 	});
   	 }

   }catch(e){
   	 console.log(e);
   }

}