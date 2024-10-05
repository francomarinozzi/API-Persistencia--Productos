const Componente = require('./componente')
const Fabricante = require('./fabricante')
const Producto = require('./producto')

Producto.belongsToMany(Fabricante)
Fabricante.belongsToMany(Producto)


Producto.belongsToMany(Componente)
Componente.belongsToMany(Producto)


module.exports = {
    Componente,
    Producto,
    Fabricante
}