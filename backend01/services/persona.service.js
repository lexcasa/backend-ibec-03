const personas = [
    {
        nombre: "Alex",
        apellido: "Casadevall"
    },
    {
        nombre: "Pedro",
        apellido: "Fernandez"
    },
    {
        nombre: "Alejandro",
        apellido: "Correa"
    }
]

const Persona = {
    buscarPersonaIniciales: function (objIniciales){
        /*
        Objeto Iniciales: 
            {
                nombre: 'A',
                apellido: 'C'
            }
        */
       let arrPersonas = []
       personas.map( persona => {
           // Inicial nombre
           let iniNombre    = persona.nombre[0].toUpperCase()
           let iniApellido  = persona.apellido[0].toUpperCase()

           if(iniNombre === objIniciales.nombre.toUpperCase() && iniApellido === objIniciales.apellido.toUpperCase()){
            arrPersonas.push(persona)
           }
       })

       return {
           personas: arrPersonas
       }
    }
}

module.exports = Persona