const mdb = require('./mdb.service')

const Producto = {
    reporteProductos: async function (){
        const sql = `
            SELECT 
                CONCAT(productos.Nombre, ' ', productos.Marca) AS Producto,
                ventas.Cantidad,
                (ventas.Cantidad * ventas.Precio) AS SubTotal
            FROM ventas
            JOIN productos ON ventas.IdProducto = productos.ID
        `
        return mdb.query(sql, [])
    }
}
module.exports = Producto