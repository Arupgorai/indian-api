var mongoose = require('mongoose');

var BankSchema = new mongoose.Schema({
	bank : String,
	ifsc : String,
	micr : String,
	branch: String,
	address: String,
	contact: Number,
	city: String,
	district: String,
	state : String,
	lat : String,
	lng : String,
	is_active: Boolean,
	alias_to: String
}, { collection : 'banks' });

BankSchema.methods.toJSON = function() {

  var obj = this.toObject();

  delete obj.created;
  delete obj.updated;
  delete obj._id;

  return obj;

}

var ifsc = mongoose.model('banks', BankSchema);

module.exports = ifsc;