const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    studentId: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    GPA: { type: Number }
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Student', studentSchema)
