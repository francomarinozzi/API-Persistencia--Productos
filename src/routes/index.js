const { Router } = require('express')
const productosRoutes = require('./productosRoutes')
const fabricanteRoutes=require('./fabricanteRoutes')

const router = Router()

router.use('/productos', productosRoutes)
router.use('/fabricantes',fabricanteRoutes)



module.exports = router