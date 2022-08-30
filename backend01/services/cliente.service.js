const mdb = require('./mdb.service')

const Cliente = {
    todos: async function (){
        const sql = `
            SELECT * FROM clientes
        `
        return mdb.query(sql, [])
    },
    nuevo: function (cliente){
        const sql = `
            INSERT INTO clientes (Nombre, Celular, Barrio)
            VALUES
            (?, ?, ?)
        `
        return mdb.query(sql, [cliente.nombre, cliente.celular, cliente.barrio])
    },
    editar: function (cliente){
        const sql = `
            UPDATE clientes SET 
                Nombre = ?,
                Celular = ?,
                Barrio = ?
            WHERE ID = ?
        `
        return mdb.query(sql, [cliente.nombre, cliente.celular, cliente.barrio, cliente.ID])
    }
}
module.exports = Cliente