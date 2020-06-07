const express = require('express');
const categoriasController = require('../controllers/categoriaController');
const {categoriaValidator} = require('../validation/validator');

const router = express.Router();

router.get('/', categoriasController.getCategorias);
router.post('/', categoriaValidator, categoriasController.crearCategoria);
router.put('/', categoriaValidator, categoriasController.modificarCategoria);
router.get('/:id', categoriasController.getCategoriaById);
router.delete('/:id', categoriasController.eliminarCategoriaById);

module.exports = router;