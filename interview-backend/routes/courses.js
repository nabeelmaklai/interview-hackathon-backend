const express = require('express')
const router = express.Router()
const coursesCtrl = require('../controllers/courses')

router.get('/', coursesCtrl.getAllCourses)

router.post('/', coursesCtrl.newCourse)

router.get('/:id', coursesCtrl.getCourseDetails)

module.exports = router
