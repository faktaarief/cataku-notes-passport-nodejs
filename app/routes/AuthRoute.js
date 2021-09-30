const router = require('express').Router()
const AuthController = require('../controllers/AuthController')

router.post('/local/login', AuthController.login)

module.exports = router
