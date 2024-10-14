const Producto = require('../models/producto')

async function initialProducts(){
    try{
        const producto1 = await Producto.create({
            nombre: 'Monitor',
            precio:300
        })
        const producto2 = await Producto.create({
            nombre: 'Teclado',
            precio:50
        })
        const producto3 = await Producto.create({
            nombre: 'Mouse',
            precio:60
        })

        console.log('Datos creados')
    }
    catch(error){
        console.log('Error al crear los datos', error)
    }

}

module.exports = initialProducts