const Persona = require('./services/persona.service')
const Calculadora = require('./services/calculadora.service')
const Cliente    = require('./services/cliente.service')

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

// Calculadora
// Inputs: POST
//  -> 
/*
     {
        vector01: [10, 20, 11],
        vector02: [10, 15, 12]
    }
*/
// Routes 
app.post('/calculadora/exclusion', (req, res) => {
    const vectores = req.body
    const response  = Calculadora.exclusion(vectores.vector01, vectores.vector02)
    res.send({
        resultado: response
    })
})

app.post('/calculadora/inclusion', (req, res) => {
    const vectores = req.body
    const response  = Calculadora.inclusion(vectores.vector01, vectores.vector02)
    res.send({
        resultado: response
    })
})

app.post('/calculadora/generador', (req, res) => {
    const vectores = req.body
    const response  = Calculadora.generador(vectores.largo, vectores.cantidad)
    res.send({
        resultado: response
    })
})

app.post('/calculadora/generador/plus', (req, res) => {
    const vectores = req.body
    const response  = Calculadora.generadorPlus(vectores.largo, vectores.str, vectores.cantidad)
    res.send({
        resultado: response
    })
})

app.get('/clientes', (req, res) => {
    const response = Cliente.todos()
    res.send(response)
})

app.post('/clientes', (req, res) => {
    const cliente = req.body
    const response = Cliente.nuevo(cliente)
    res.send({
        resultado: response
    })
})

app.listen(port, (req, res) => {
    console.log("server running :: ", port)
})