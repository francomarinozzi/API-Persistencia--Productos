const Joi = require('joi')


const productoSchema = Joi.object({
    nombre: Joi.string().optional(),
    descripcion: Joi.string().optional(),
    precio:Joi.number().optional(),
    pathimg:Joi.string().optional()
})

module.exports = productoSchema