const express = require('express')
const sequelize = require('../config/database')
const { Producto } = require('./models/producto')
const route = require('./routes/index')
const {crearDatosIniciales} = require('./seeders/')



const app = express()

app.use(express.json())

app.use(route)

crearDatosIniciales() //seed para pruebas

sequelize.sync({ force:true})  //Sacar force:true para que persistan los datos
.then(() => {
        console.log('Tablas creadas')
    })
    .catch( error => console.log('Error en creacion de tablas'))


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Ejecutando en el puerto ${PORT}`)
})

