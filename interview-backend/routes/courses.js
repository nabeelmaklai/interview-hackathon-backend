const express = require('express')
const router = express.Router()
const coursesCtrl = require('../controllers/courses')

//get all courses

router.get('/', coursesCtrl.getAllCourses)

router.post('/', coursesCtrl.newCourse)

module.exports = router
