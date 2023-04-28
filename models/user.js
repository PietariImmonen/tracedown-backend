const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 3
  },
  feelings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Feeling'
    }
  ],
})

module.exports = mongoose.model('User', schema)