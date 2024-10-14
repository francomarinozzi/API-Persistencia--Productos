const Producto = require('../models/producto')
const Fabricante=require('../models/fabricante')

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

async function initialFabricantes(){
    try{
        const fabricante1 = await Fabricante.create({
            nombre: 'Phillips',
            direccion:"Calle siempre viva 123",
            numeroContacto:"11323232"
        })
        const fabricante2 = await Fabricante.create({
            nombre: 'Samsung',
            direccion:"Calle viva 123",
            numeroContacto:"1122334455"
        })
        const fabricante3 = await Fabricante.create({
            nombre: 'LaBlanquita',
            direccion:"Calle 1233",
            numeroContacto:"11325342"
        })

        console.log('Datos creados')
    }
    catch(error){
        console.log('Error al crear los datos', error)
    }

}

module.exports = {
    initialProducts,
    initialFabricantes

}