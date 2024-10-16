const Joi = require('joi')


const componenteSchema = Joi.object({
    nombre:Joi.string().optional(),
    descripcion:Joi.string().optional()
})

module.exports = componenteSchema