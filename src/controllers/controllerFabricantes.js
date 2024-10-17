const Producto = require('../models/producto')
const Fabricante=require('../models/fabricante')
const Componente=require('../models/componente')


const getFabricantes=async(req,res)=>{
    try{
    const fabricantes= await Fabricante.findAll()
    return res.status(200).json(fabricantes)
}
catch(error){
    return res.status(404)
}
}

const getFabricantesById=async(req,res)=>{
    const idFabricante=req.params.id
    try{
    const fabricante = await Fabricante.findByPk(idFabricante)
    if(!fabricante){
        res.status(404).json({message:'Fabricante no encontrado'})
    }
    return res.status(200).json(fabricante)
}
    catch{
    return res.status(404).json({message:'Fabricante no encontrado'})
}
}


const crearFabricante= async(req,res)=>{
    
    const { nombre, direccion, numeroContacto } = req.body
    try {
    const nuevoFabricante = await Fabricante.create({
    nombre,
    direccion,
    numeroContacto
        }) 
    return res.status(201).json(nuevoFabricante)
        }
    catch(error){
    return res.status(400).json({ message: 'Error al crear fabricante', error: error.message })
}
}

const modificarFabricante = async (req, res) => {
    const idFabricante = req.params.id;
    const datosNuevos = req.body;
    try {
        const fabricante = await Fabricante.findByPk(idFabricante);

        if (!fabricante) {
            return res.status(404).json({message:'Fabricante no encontrado'});
        }
        await fabricante.update(datosNuevos);
        return res.status(200).json({message:'Fabricante actualizado'});
    } catch (error) {
    }
};

const borrarFabricante = async (req, res) => {
    const idFabricante = req.params.id;

    try {
        const fabricante = await Fabricante.findByPk(idFabricante);

        if (!fabricante) {
            return res.status(404).json({message:'Fabricante no encontrado'});
        }

        await fabricante.destroy();
        return res.status(200).json({message:'Fabricante eliminado'});
    } catch (error) {
        return res.status(500).json({message:'Error al eliminar fabricante'});
    }
};

const getProductosByFabricante = async (req, res) => {
    const idFabricante = req.params.id;
    try {
        const fabricante = await Fabricante.findByPk(idFabricante, {
            include: {
                model: Producto
            }
        });
        if (!fabricante || fabricante.productos.length === 0) {
            return res.status(404).json({message:'No se encontraron productos para este fabricante'});
        }
        return res.status(200).json(fabricante.productos);
    } catch (error) {
        return res.status(500).json({message:'Error al obtener los productos del fabricante'});
    }
};



module.exports={
    getFabricantes,
    getFabricantesById,
    crearFabricante,
    modificarFabricante,
    borrarFabricante,
    getProductosByFabricante
}