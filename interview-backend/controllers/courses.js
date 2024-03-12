const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const Course = require('../models/Course')

const getAllCourses = async (req, res) => {
  try {
    let courses = await Course.find().populate('students')
    res.send(courses)
  } catch (error) {
    res.send({ error: err.message })
  }
}

const getCourseDetails = async (req, res) => {
  const courseId = req.params.id
  try {
    const course = await Course.findById(courseId).populate(
      // "students.student", "students.grade"
      [
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
    )
    res.send(course)
  } catch (error) {
    console.log(error)
  }
}

const newCourse = async (req, res) => {
  try {
    let newCourse = await Course.create(req.body)
    res.json(newCourse)
  } catch (error) {
    res.send({ error: err.message })
  }
}

module.exports = {
  getAllCourses,
  newCourse,
  getCourseDetails
}
