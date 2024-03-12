const Student = require('../models/Student')
const Course = require('../models/Course')
const Grade = require('../models/Grade')

const getStudents = async (req, res) => {
  try {
    const allStudents = await Student.find({})
    res.send(allStudents)
  } catch (error) {
    console.log('Get students constroller error', error)
  }
}

const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body)
    res.send(newStudent)
  } catch (error) {
    console.log('error on yje create student controller', error)
  }
}

const getStudentDetails = async (req, res) => {
  const studentId = req.params.id
  try {
    const student = await Student.findById(studentId).populate({
      path: 'courses',
      populate: [
        {
          path: 'students',
          populate: {
            path: 'student'
          }
        },
        {
          path: 'students',
          populate: {
            path: 'grade'
          }
        }
      ]
    })
    res.send(student)
  } catch (error) {
    console.log(error)
  }
}

const updateStudentDetails = async (req, res) => {
  console.log('our req.params', req.params)
  console.log('our req.body', req.body)
  try {
    const grade= await Grade.create(req.body.grade)
    await Course.updateOne(
      { _id: req.body.course },
      {
        $push: {
          students: {
            student: req.params.id,
            grade: grade._id
          }
        }
      }
    )
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
      $push: { courses: req.body.courseId }
    })

 
    res.send(updatedStudent)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getStudents,
  createStudent,
  getStudentDetails,
  updateStudentDetails
}
