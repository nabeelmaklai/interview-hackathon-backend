const express = require('express')
const router = express.Router()
const studentCtrl = require('../controllers/Students')

router.get('/', studentCtrl.getStudents)
router.post('/', studentCtrl.createStudent)

module.exports = router
