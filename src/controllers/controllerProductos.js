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

module.exports = {
    getProductos,
    crearProducto
}