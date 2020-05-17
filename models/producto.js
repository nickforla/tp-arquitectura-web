const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    codigoProducto: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        nombre: {
            type: String,
            required: true
        }
    }
});

module.exports = model('Producto', productoSchema);