const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gradeSchema = new Schema(
  {
    score: { type: Number, required: true },
    letter: { type: String, required: true }
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Grade', gradeSchema)
