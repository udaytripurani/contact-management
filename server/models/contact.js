const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  phone: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
