const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  positive: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Feeling', schema)