const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create student schema and model
const StudentSchema = new Schema({
  name: {
    type: String,
  },
  roll: {
    type: String,
    required: [true, 'this field is required'],
  },
  present: {
    type: Boolean,
    default: true,
  },
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
