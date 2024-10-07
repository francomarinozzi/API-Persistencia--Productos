const Joi = require('joi')


const productoSchema = Joi.object({
    nombre: Joi.string().required(),
    descripcion: Joi.string(),
    precio:Joi.number().required(),
    pathimg:Joi.string()
})

module.exports = productoSchema