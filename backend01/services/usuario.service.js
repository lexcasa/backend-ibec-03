const mdb = require('./mdb.service')
const jwt = require('jsonwebtoken');
console.log("global key: ", keyJWT)
const Usuario = {
    login: async function (usuario){
        const sql = `
            SELECT ID, tipo FROM usuarios
            WHERE email = ? AND clave = MD5(?)
        `
        const usuarioArr = await mdb.query(sql, [usuario.email, usuario.clave]);
        let user = undefined

        if(usuarioArr.length > 0){
            user = usuarioArr[0]
            user.token = jwt.sign({ID: user.ID, tipo: user.tipo}, keyJWT)
        }
        
        return user ? user : []
    }
}
module.exports = Usuario