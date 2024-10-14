const Producto = require('../models/producto')
const Fabricante=require('../models/fabricante')

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
        return [fabricante1,fabricante2,fabricante3]
    }
    catch(error){
        console.log('Error al crear los datos', error)
        return []
    }


}

async function initialProducts(){
    const fabricantes = await initialFabricantes()
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

        await producto1.addFabricante(fabricantes[0]);
        await producto1.addFabricante(fabricantes[1]);
        await producto1.addFabricante(fabricantes[2]);

        await producto2.addFabricante(fabricantes[0]);
        await producto2.addFabricante(fabricantes[1]);
        await producto3.addFabricante(fabricantes[2]);
        console.log('Datos creados')
    }
    catch(error){
        console.log('Error al crear los datos', error)
    }

}



module.exports = {
    initialProducts,
    initialFabricantes,

}