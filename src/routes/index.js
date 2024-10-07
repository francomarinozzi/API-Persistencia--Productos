const { Router } = require('express')
const productosRoutes = require('./productosRoutes')

const router = Router()

router.use('/productos', productosRoutes)



module.exports = router