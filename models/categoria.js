const { Schema, model } = require('mongoose');

const categoriaSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }
});

module.exports = model('Categoria', categoriaSchema);