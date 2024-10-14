const Producto = require('../models/producto')


const getProductos = async(req,res) =>{
    try{
        const productos = await Producto.findAll()
        return res.status(200).json(productos)
    }
    catch(error){
        return res.status(404)
    }
}

    const crearProducto = async(req,res) =>{
        const { nombre, descripcion, precio } = req.body
        try {
            const nuevoProducto = await Producto.create({
            nombre,
            descripcion,
            precio
        }) 
        return res.status(201).json(nuevoProducto)
        }
        catch(error){
            return res.status(400).send('Error al crear producto')
    }
}


const getProductosById = async (req,res) =>{
    const id = req.params.id
    try{
        const producto = await Producto.findByPk(id)
        if(!producto){
            res.status(404).send('Producto no encontrado')
        }
        return res.status(200).json(producto)
    }
    catch{
        return res.status(404).send('Producto no encontrado')
    }
}


const modificarProducto = async(req,res) =>{
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    const datosNuevos = req.body

    if(!producto){
        return res.status(404).send('Producto no encontrado')
    }

    await producto.update(datosNuevos)
    return res.status(200).send('Producto actualizado')
}



module.exports = {
    getProductos,
    crearProducto,
    getProductosById,
    modificarProducto
}