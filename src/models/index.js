const sequelize = require('../../config/database')
const Componente = require('./componente')
const Fabricante = require('./fabricante')
const Producto = require('./producto')



Producto.belongsToMany(Fabricante, {through:'ProductoFabricante'})
Fabricante.belongsToMany(Producto, {through:'ProductoFabricante'})


Producto.belongsToMany(Componente , {through: 'ProductoComponente'})
Componente.belongsToMany(Producto, {through: 'ProductoComponente'})


module.exports = {
    Componente,
    Producto,
    Fabricante
}
