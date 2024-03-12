const express = require('express')
const router = express.Router()
const studentCtrl = require('../controllers/Students')

router.get('/', studentCtrl.getStudents)
router.post('/', studentCtrl.createStudent)
router.get('/:id', studentCtrl.getStudentDetails)
router.put('/:id', studentCtrl.updateStudentDetails)

module.exports = router
