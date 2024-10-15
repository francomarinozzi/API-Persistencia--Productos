const { Router } = require('express')
const controllerFabricantes = require('../controllers/controllerFabricantes')
const {fabricanteSchema, validador} = require('../middleware')


const route = Router()

route.get('/',controllerFabricantes.getFabricantes)

route.get('/:id',controllerFabricantes.getFabricantesById)

route.post('/',validador(fabricanteSchema),controllerFabricantes.crearFabricante)

module.exports=route
