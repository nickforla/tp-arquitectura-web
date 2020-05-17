const express = require('express');
const productosController = require('../controllers/productoController');

const router = express.Router();

router.get('/', productosController.getProductos);
router.post('/', productosController.crearProducto);
router.put('/', productosController.modificarProducto);
router.get('/:id', productosController.getProductoById);
router.delete('/:id', productosController.eliminarProductoById);

module.exports = router;