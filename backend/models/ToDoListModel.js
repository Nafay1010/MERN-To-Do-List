const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
  work: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Todo', TodoSchema)