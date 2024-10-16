
const {Componente, Fabricante, Producto} = require('../models/')


const getComponentes = async(req,res) =>{
    try{
        const componentes = await Componente.findAll()
        return res.status(200).json(componentes)
    }
    catch{
        return res.status(404)
    }
}


module.exports = {
    getComponentes
}