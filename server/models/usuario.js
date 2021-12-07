const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//declarar esquema
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del usuario']
    },
    matricula: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa la matricula']
    },
    correo: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa tu correo electronico']
    },
    password: {
        type: String,
        required: [true, 'Por favor ingresa la contraseña']
    },
    role: {
        type: String,
        default: 'USER_ROLE',
    },
    img: {
        type: String,
        required: [true, 'Por favor ingresa la imagen']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: { //para usar la api de google para poder logear
        type: Boolean,
        default: false
    }
});
//el esquema utilize el plugin
usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

//crea una coleccion
module.exports = mongoose.model('Usuario', usuarioSchema);