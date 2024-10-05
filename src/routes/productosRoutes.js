const { Router } = require('express')
const controllerProductos = require('../controllers/controllerProductos')

const route = Router()

route.get('/', controllerProductos.getProductos )
route.post('/',controllerProductos.crearProducto)

module.exports = route