const Joi = require('joi')


const fabricanteSchema = Joi.object({
    nombre: Joi.string().required(),
    direccion: Joi.string().required(),
    numeroContacto: Joi.string().required(),
    pathImgPerfil:Joi.string()
})

module.exports = fabricanteSchema