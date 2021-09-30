const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/', UserController.create)
router.get('/', UserController.findAll)
router.get('/:id', UserController.findByPk)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.destroy)

module.exports = router
