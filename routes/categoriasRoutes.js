const express = require('express');
const categoriasController = require('../controllers/categoriaController');
const {categoriaValidator} = require('../validation/validator');

const categoriasRouter = express.Router();

categoriasRouter.get('/', categoriasController.getCategorias);
categoriasRouter.post('/', categoriaValidator, categoriasController.crearCategoria);
categoriasRouter.put('/', categoriaValidator, categoriasController.modificarCategoria);
categoriasRouter.get('/:id', categoriasController.getCategoriaById);
categoriasRouter.delete('/:id', categoriasController.eliminarCategoriaById);

module.exports = categoriasRouter;