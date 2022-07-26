const clientes = [
    {
        documento: "123",
        nombre: "Alex",
        email: "alex@gmail.com",
        tipo: "final",
        activo: 1
    },
    {
        documento: "111",
        nombre: "Juan",
        email: "juan@gmail.com",
        tipo: "final",
        activo: 1
    }
]

const Cliente = {
    todos: function (){
        return clientes
    },
    nuevo: function (cliente){
        const clientesNew = clientes
        // Verificar que no exista el mismo documento
        let find = false
        clientesNew.map( (item, i) => {
            if(item.documento == cliente.documento){
                find = true
            }
        })
        if(!find){
            clientesNew.push(cliente)
            return clientesNew
        }
        return 'Error al ingresar cliente'
    }
}
module.exports = Cliente