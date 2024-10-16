const { Router } = require('express')
const controllerComponentes = require('../controllers/controllerComponentes')
const { componenteSchema, validador } = require('../middleware/')

const router = Router()

router.get('/', controllerComponentes.getComponentes)

module.exports = router