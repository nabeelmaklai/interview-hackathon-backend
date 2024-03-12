const Student = require('../models/Student')

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
    const student = await Student.findById(studentId).populate('courses')
    res.send(student)
  } catch (error) {
    console.log(error)
  }
}

const updateStudentDetails = async (req, res) => {
  try {
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
