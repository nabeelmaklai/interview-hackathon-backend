const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    studentId: { type: Number, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Student', studentSchema)
