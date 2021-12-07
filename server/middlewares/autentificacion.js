const jwt = require('jsonwebtoken');
let verificaToken = (req, res, next) => {
    let token = req.get('token');
    //console.log('hola querido padre, he entrado al middleware pero no te diste cuenta');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({ //Checa ue la firma sea igual y la hora de expiracion
                ok: false,
                err
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
}

module.exports = {
    verificaToken
}