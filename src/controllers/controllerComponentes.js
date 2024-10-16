
const {Componente, Fabricante, Producto} = require('../models/')


const getComponentes = async (req, res) => {
    try {
      const componentes = await Componente.findAll();
      res.status(200).json(componentes);
    } catch (error) {
      res.status(500).send('Error al obtener los componentes');
    }
}

const getComponenteById = async (req, res) => {
    const idComponente = req.params.id;
    try {
        const componente = await Componente.findByPk(idComponente);
        if (!componente) {
            return res.status(404).send('Componente no encontrado');
        }
        return res.status(200).json(componente);
    } catch (error) {
        return res.status(500).send('Error al obtener el componente');
    }
};

const crearComponente = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const nuevoComponente = await Componente.create({
            nombre,
            descripcion
        });
        return res.status(201).json(nuevoComponente);
    } catch (error) {
        return res.status(400).send('Error al crear el componente');
    }
};

const modificarComponente = async (req, res) => {
    const idComponente = req.params.id;
    const datosNuevos = req.body;

    try {
        const componente = await Componente.findByPk(idComponente);

        if (!componente) {
            return res.status(404).send('Componente no encontrado');
        }

        await componente.update(datosNuevos);
        return res.status(200).send('Componente actualizado');
    } catch (error) {
        return res.status(500).send('Componente no encontrado')
    }
};

const borrarComponente = async (req, res) => {
    const idComponente = req.params.id;
    try {
        const componente = await Componente.findByPk(idComponente);
        if (!componente) {
            return res.status(404).send('Componente no encontrado');
        }
        await componente.destroy();
        return res.status(200).send('Componente eliminado');
    } catch (error) {
        return res.status(500).send('Error al eliminar el componente');
    }
};

const getProductosByComponente = async (req, res) => {
    const idComponente = req.params.id;
    try {
        const componente = await Componente.findByPk(idComponente, {
            include: {
                model: Producto
            }
        });
        if (!componente || componente.productos.length === 0) {
            return res.status(404).send('No se encontraron productos para este componente');
        }
        return res.status(200).json(componente.productos);
    } catch (error) {
        return res.status(500).send('Error al obtener los productos del componente');
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