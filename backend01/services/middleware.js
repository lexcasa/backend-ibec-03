const jwt = require('jsonwebtoken');
const Middleware = {
    verify: function (req, res, next){
        let token = undefined
        
        try {
            token = req.headers.token
            token = jwt.verify(token, keyJWT)
            token = token.tipo == 'admin'
            console.log(token)
        } catch (e){}

        if(token){
            next()
        } else {
            res.status(401).send({
                error: "Usuario no permitido"
            })
        }
    }
}
module.exports = Middleware