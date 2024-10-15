const { Router } = require('express')
const controllerFabricantes = require('../controllers/controllerFabricantes')
const {productoSchema, validador} = require('../middleware')


const route = Router()

route.get('/',controllerFabricantes.getFabricantes)

route.get('/:id',controllerFabricantes.getFabricantesById)

route.post('/',controllerFabricantes.crearFabricante)

module.exports=route
