
const {Componente, Fabricante, Producto} = require('../models/')


const getComponentes = async (req, res) => {
    try {
      const componentes = await Componente.findAll()
      res.status(200).json(componentes)
    } catch (error) {
      res.status(500).json({message:'Error al obtener los componentes'})
    }
}

const getComponenteById = async (req, res) => {
    const idComponente = req.params.id
    try {
        const componente = await Componente.findByPk(idComponente)
        if (!componente) {
            return res.status(404).json({message:'Componente no encontrado'})
        }
        return res.status(200).json(componente);
    } catch (error) {
        return res.status(500).json({message:'Error al obtener el componente'})
    }
};

const crearComponente = async (req, res) => {
    const { nombre, descripcion } = req.body
    try {
        const nuevoComponente = await Componente.create({
            nombre,
            descripcion
        });
        return res.status(200).json(nuevoComponente)
    } catch (error) {
        return res.status(400).json({message:'Error al crear el componente'},error)
    }
};

const modificarComponente = async (req, res) => {
    const idComponente = req.params.id
    const datosNuevos = req.body

    try {
        const componente = await Componente.findByPk(idComponente)

        if (!componente) {
            return res.status(404).json('Componente no encontrado')
        }

        await componente.update(datosNuevos);
        return res.status(201).json({message:'Componente actualizado'})
    } catch (error) {
        return res.status(500).json({message:'Componente no actualizado'},error)
    }
};

const borrarComponente = async (req, res) => {
    const idComponente = req.params.id
    try {
        const componente = await Componente.findByPk(idComponente)
        if (!componente) {
            return res.status(404).json({message:'Componente no encontrado'})
        }
        await componente.destroy()
        return res.status(201).json({message:'Componente eliminado'})
    } catch (error) {
        return res.status(500).json({message:'Error al eliminar el componente'})
    }
};

const getProductosByComponente = async (req, res) => {
    const idComponente = req.params.id
    try {
        const componente = await Componente.findByPk(idComponente, {
            include: {
                model: Producto
            }
        });json
        if (!componente || componente.productos.length === 0) {
            return res.status(404).json({message:'No se encontraron productos para este componente'})
        }
        return res.status(200).json(componente.productos)
    } catch (error) {
        return res.status(500).json({message:'Error al obtener los productos del componente'},error)
    }
};

module.exports = {
    getComponentes,
    getComponenteById,
    crearComponente,
    modificarComponente,
    borrarComponente,
    getProductosByComponente
}