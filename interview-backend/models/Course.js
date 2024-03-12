const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    students: [
      {
        students: { type: Schema.Types.ObjectId, ref: 'Student' },
        grades: { type: Schema.Types.ObjectId, ref: 'Grade' }
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Course', courseSchema)
