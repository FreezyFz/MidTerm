var mongoose = require('mongoose');
mongoose.connect('mongodb://110219042:110219042@ds161190.mlab.com:61190/fzplace');
// mongoose.connect('mongodb://localhost:27017/person');
var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  firstname : String,
  lastname  : String,
  age       : Number,
  occupation: String
});

module.exports = mongoose.model('Person', personSchema);
