const Producto = require('../models/producto')


const getProductos = async(req,res) =>{
    try{
        const productos = await Producto.findAll()
        res.status(200).json(productos)
    }
    catch(error){
        res.status(404)
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
        res.status(201).json(nuevoProducto)
        }
        catch(error){
        res.status(400).send('Error')
    }
}


const getProductosById = async (req,res) =>{
    const id = req.params.id
    try{
        const producto = await Producto.findByPk(id)
        if(!producto){
            res.status(404).send('Producto no encontrado')
        }
        res.status(200).json(producto)
    }
    catch{
        res.status(404).send('Producto no encontrado')
    }
}

module.exports = {
    getProductos,
    crearProducto,
    getProductosById
}