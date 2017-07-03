var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pincode = new Schema({
   state_name : String,
   district_name : String,
   sub_distname : String,
   village : String,
   locality_detail_1 : String,
   locality_detail_2 : String,
   locality_detail_3: String,
   office_name: String,
   pincode: Number

});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('zip_datas', pincode);

// make this available to our users in our Node applications
module.exports = User;