const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const Course = require('../models/Course')

const getAllCourses = async (req, res) => {
  try {
    let courses = await Course.find()
    res.send(courses)
  } catch (error) {
    res.send({ error: err.message })
  }
}

// const getCourse =

const newCourse = async (req,res)=>{
  try {
    let newCourse = await Course.create(req.body)
    res.json(newCourse)
  } catch (error) {
    res.send({error: err.message})
  }
}

module.exports = {
  getAllCourses,
  newCourse
}
