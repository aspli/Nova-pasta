const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2
  },
  user: {
    type: String,
    require: true,
    min: 3,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }
}, { timestamps: true })

module.exports = model('User', userSchema)
