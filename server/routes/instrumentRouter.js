const Router = require('express')
const router = new Router()
const instrumentController = require('../controllers/instrumentController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), instrumentController.create)
router.get('/', instrumentController.getAll)
router.get('/:id', instrumentController.getOne)

module.exports = router