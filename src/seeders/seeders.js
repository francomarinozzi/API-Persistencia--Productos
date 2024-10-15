const Producto = require('../models/producto')
const Fabricante=require('../models/fabricante')
const Componente=require('../models/componente')


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

async function initialComponentes(){
    try{
        const componente1= await Componente.create({
            nombre:"Cable"
        })
        const componente2=await Componente.create({
            nombre:"Bateria"
        })
        const componente3=await Componente.create({
            nombre:"Pulsador"
        })
        console.log("Datos Creados")
        return[componente1,componente2,componente3]
    }
    catch(error){
        console.log("Error al crear los datos", error)
        return []
    }

}

async function initialProducts(){
    const fabricantes = await initialFabricantes()
    const componentes= await initialComponentes()
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
//asignaciones del producto a los fabricantes
        await producto1.addFabricante(fabricantes[0]);
        await producto1.addFabricante(fabricantes[1]);
        await producto1.addFabricante(fabricantes[2]);
        await producto2.addFabricante(fabricantes[0]);
        await producto2.addFabricante(fabricantes[1]);
        await producto3.addFabricante(fabricantes[2]);
//asignaciones del producto a los componentes       
        await producto1.addComponente(componentes[0]);
        await producto1.addComponente(componentes[1]);
        await producto1.addComponente(componentes[2]);
        await producto2.addComponente(componentes[0]);
        await producto2.addComponente(componentes[1]);
        await producto3.addComponente(componentes[2]);
        console.log('Datos creados')
    }
    catch(error){
        console.log('Error al crear los datos', error)
    }

}




module.exports = {
    initialProducts,
    initialFabricantes,
    initialComponentes
}