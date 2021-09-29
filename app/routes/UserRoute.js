const router = require('express').Router()
const UserController = require('../controllers/UserController')
const UserValidate = require('../validators/UserValidate')

router.get('/', UserController.findAll)
router.post('/', UserValidate(), UserController.create)

module.exports = router
