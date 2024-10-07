const { Router } = require('express')
const controllerProductos = require('../controllers/controllerProductos')
const {productoSchema, validador} = require('../middleware')


const route = Router()

route.get('/', controllerProductos.getProductos )

route.get('/:id', controllerProductos.getProductosById )

route.post('/',validador(productoSchema), controllerProductos.crearProducto)



module.exports = route