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

module.exports = {
  getStudents,
  createStudent
}
