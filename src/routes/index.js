const { Router } = require('express')
const productosRoutes = require('./productosRoutes')
const fabricanteRoutes=require('./fabricanteRoutes')
const componenteRoutes = require('./componenteRoutes')
const router = Router()

router.use('/productos', productosRoutes)
router.use('/fabricantes',fabricanteRoutes)
router.use('/componentes', componenteRoutes)


module.exports = router