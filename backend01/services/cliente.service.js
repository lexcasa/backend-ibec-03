const mdb = require('./mdb.service')

const Cliente = {
    todos: async function (){
        const sql = `
            SELECT * FROM clientes
        `
        return mdb.query(sql, [])
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