const express = require('express');
const productosController = require('../controllers/productoController');
const {productoValidator} = require('../validation/validator');

const productosRouter = express.Router();

productosRouter.get('/', productosController.getProductos);
productosRouter.post('/', productoValidator, productosController.crearProducto);
productosRouter.put('/', productoValidator, productosController.modificarProducto);
productosRouter.get('/:id', productosController.getProductoById);
productosRouter.delete('/:id', productosController.eliminarProductoById);

module.exports = productosRouter;