const Joi = require('joi')


const productoSchema = Joi.object({
    nombre: Joi.string().optional(),
    descripcion: Joi.string(),
    precio:Joi.number().optional(),
    pathimg:Joi.string()
})

module.exports = productoSchema