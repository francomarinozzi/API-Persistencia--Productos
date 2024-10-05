const express = require('express')
const sequelize = require('../config/database')
const { Producto } = require('./models/producto')

const app = express()

app.use(express.json())


sequelize.sync({ })
    .then(() => {
        console.log('Tablas creadas')
    })
    .catch( error => console.log('Error en creacion de tablas'))


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Ejecutando en el puerto ${PORT}`)
})

