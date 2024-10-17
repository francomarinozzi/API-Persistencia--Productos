const productoSchema = require('./productoSchema')
const fabricanteSchema = require('./fabricanteSchema')
const componenteSchema = require('./componenteSchema')



/*
'validationOptions' evalúa si el campo se está actualizando o se está creando.
En caso de actualizarse(isUpdating = true) pasa el valor 'optional' para que no todos los campos sean obligatorios.

*/
const validador = (schema, isUpdating = false) =>{
    return (req,res,next) => {
        
        const validationOptions = {
            presence : isUpdating ? 'optional' : 'required'
        }

        const result = schema.validate(req.body, validationOptions)

        if(result.error){
        console.log(result.error.details)
        return res.status(400).json({message: result.error.details[0].message})
        }
        
    next()
}}

module.exports = {validador , productoSchema , fabricanteSchema, componenteSchema}