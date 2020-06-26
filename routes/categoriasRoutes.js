const express = require('express');
const categoriasController = require('../controllers/categoriaController');
const productosController = require('../controllers/productoController');
const {categoriaValidator} = require('../validation/validator');

const categoriasRouter = express.Router();

categoriasRouter.get('/', categoriasController.getCategorias);
categoriasRouter.post('/', categoriaValidator, categoriasController.crearCategoria);
categoriasRouter.put('/', categoriaValidator, categoriasController.modificarCategoria);
categoriasRouter.get('/:id', categoriasController.getCategoriaById);
categoriasRouter.delete('/:id', categoriasController.eliminarCategoriaById);
categoriasRouter.get('/:id/productos', productosController.getProductosByCategoriaId);

module.exports = categoriasRouter;