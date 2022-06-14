const Persona = require('./services/persona.service')
// req. modulo de express para hacer el setup del back
const express       = require('express')
const bodyParser    = require('body-parser')
// Inicializar el backend dentro de una app
const app     = express()
const port    = 3000

app.use(bodyParser.json())

// Def. estado
// app.[metodo](url, callback)
app.get('/', (req, res) => {
    // Entrega el response
    // res: response
    // .send : enviar el JSON al front
    res.send({
        saludo: "Hola Mundo!"
    })
})

// 
app.get('/saludo/:nombre', (req, res) => {
    // /saludo/:pepe --> req.params.pepe
    const nombre = req.params.nombre
    res.send({
        saludo: "Hola, " + nombre
    })
})

app.post('/buscar-persona', (req, res) => {
    const iniciales = req.body
    console.log("obj :", iniciales)
    const personas  = Persona.buscarPersonaIniciales(iniciales)
    res.send(personas)
})

app.listen(port, (req, res) => {
    console.log("server running :: ", port)
})