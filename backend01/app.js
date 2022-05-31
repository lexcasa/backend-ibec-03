const Persona = require('./services/persona.service')

const test1 =  { nombre: 'A', apellido: 'C'}
console.log("Test 1 :: ", Persona.buscarPersonaIniciales(test1))

const test2 =  { nombre: 'P', apellido: 'F'}
console.log("Test 2 :: ", Persona.buscarPersonaIniciales(test2))

const test3 =  { nombre: 'X', apellido: 'Z'}
console.log("Test 3 :: ", Persona.buscarPersonaIniciales(test3))