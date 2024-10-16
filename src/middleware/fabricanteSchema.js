const Joi = require('joi')


const fabricanteSchema = Joi.object({
    nombre: Joi.string().optional(),
    direccion: Joi.string().optional(),
    numeroContacto: Joi.string().optional(),
    pathImgPerfil:Joi.string().optional()
})


/*Estan todos establecidos como optional() porque en el momento de la validacion se evalúa si se está creando un nuevo registro o
si se está modificando uno existente. 
*/
module.exports = fabricanteSchema