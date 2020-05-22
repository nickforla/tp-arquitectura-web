const express = require('express');
const productosController = require('../controllers/productoController');
const {productoValidator} = require('../validation/validator');

const router = express.Router();

router.get('/', productosController.getProductos);
router.post('/', productoValidator, productosController.crearProducto);
router.put('/', productoValidator, productosController.modificarProducto);
router.get('/:id', productosController.getProductoById);
router.delete('/:id', productosController.eliminarProductoById);

module.exports = router;