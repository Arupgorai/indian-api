var mongoose = require ('mongoose');

var ZipSchema = new mongoose.Schema({
	office_name: String,
	pincode : Number,
	office_type: String,
	delivery_status: String,
	division_name: String,
	region_name: String,
	circle_name: String,
	taluk: String,
	district_name: String,
	state_name: String,
	telephone: String,
	related_suboffice: String,
	related_headoffice: String,
	longitude : String,
	latitude: String


});

ZipSchema.methods.toJSON = function() {

  var obj = this.toObject();

  delete obj.__v;
  delete obj._id;

  return obj;

}

var ZipCode = mongoose.model('zip_datas', ZipSchema);

module.exports = ZipCode;
