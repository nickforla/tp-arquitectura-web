const Producto = require('../models/producto');
const Categoria = require('../models/categoria');

const buildProductosQuery = (requestQuery) => {

    let query = {};

	//codigoProducto
	if(requestQuery.codigoProducto) {
        query.codigoProducto = {$regex: requestQuery.codigoProducto, $options: 'i' };
    }
	//nombre
	if(requestQuery.nombre) {
        query.nombre = {$regex: requestQuery.nombre, $options: 'i' };
    }
	//marca
	if(requestQuery.marca) {
        query.marca = {$regex: requestQuery.marca, $options: 'i' };
    }
	//Stock (desde, hasta o between)
    if(requestQuery.stockDesde) {
        if(requestQuery.stockHasta) {
			query.stock = { $gte: Number.parseFloat(requestQuery.stockDesde), $lte: Number.parseFloat(requestQuery.stockHasta) } ;	
        } else {
            query.stock = {$gte: Number.parseFloat(requestQuery.stockDesde)};
		}
    } else if(requestQuery.stockHasta) {
        query.stock = {$lte: Number.parseFloat(requestQuery.stockHasta)};
    }
	//precio (desde, hasta o between)
    if(requestQuery.precioDesde) {
        if(requestQuery.precioHasta) {
			query.precio = { $gte: Number.parseFloat(requestQuery.precioDesde), $lte: Number.parseFloat(requestQuery.precioHasta) } ;	
        } else {
            query.precio = {$gte: Number.parseFloat(requestQuery.precioDesde)};
		}
    } else if(requestQuery.precioHasta) {
        query.precio = {$lte: Number.parseFloat(requestQuery.precioHasta)};
    } 
	//Nombre categoria
	if(requestQuery.categoriaNombre) { 
        query['categoria.nombre']= {$regex: requestQuery.categoriaNombre, $options: 'i' };
    }

    return query;
}

/**
 * Retorna una lista de productos en base a los parámetros de búsqueda.
*/
const getProductos = (req, res) => {

    const limit = req.query.limit ? req.query.limit : 10;
    const offset = req.query.offset ? req.query.offset : 0;
    
    let query = buildProductosQuery(req.query);
   
    Producto.find(query)
    .limit(Number.parseInt(limit))
    .skip(Number.parseInt(offset))
    .then((productos) => {
        res.status(200).json(productos);
    })
    .catch((err) => {
        res.status(500).json({
            msg: err
        })
    });
}

/**
 * Busca un producto por id y lo retorna si es hallado, caso contrario retorna un 404.
*/
const getProductoById = (req, res) => {

    Producto.findById(req.params.id)
    .then((producto) => {
        if (producto) {
            res.status(200).json(producto);
        } else {
            res.status(404).json({
                msg: `El producto con el id indicado(${req.params.id}) no fue encontrado`
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            msg: err
        });
    });

}

/**
 * Crea un nuevo producto.
 */
const crearProducto = (req, res) => {

    const nuevoProducto = new Producto(req.body);

    nuevoProducto.save()
    .then(resultado => {
        res.status(201).json(resultado);
    })
    .catch(error => {
        res.status(500).json({
            msg: error
        });
    });

}

/**
 * Modifica un producto existente.
*/
const modificarProducto = (req, res) => {

    const productoAModificar = req.body;

    Producto.updateOne({_id: productoAModificar._id}, productoAModificar)
    .then(resultado => {
        if (resultado.nModified === 0){
            res.status(404).json({
                msg: `El producto con el id indicado(${productoAModificar._id}) no fue encontrado.`
            });
        } else {
            res.status(200).json({
                msg: 'Producto modificado exitosamente!'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            msg: error
        });
    });
}

/**
 * Elimina un producto por id.
*/
const eliminarProductoById = (req, res) => {

    Producto.deleteOne({_id: req.params.id})
    .then(result => {
        if (result.deletedCount == 1) {
            res.status(200).json({
                msg: 'Producto eliminado exitosamente!'
            });
        } else {
            res.status(404).json({
                msg: `El producto con el id indicado(${req.params.id}) no fue encontrado.`
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            msg: error
        });
    });
}

/**
 * Obtiene todos los productos asociados a una categoria
*/
const getProductosByCategoriaId = (req, res) => {
    
    const categoriaId = req.params.id;

    Categoria.findById(categoriaId)
    .then(catResult => {
        if(catResult) {
            Producto.find({'categoria.id': categoriaId})
            .then(prodResult => {
                res.status(200).json(prodResult);
            }).catch(err => {
                res.status(500).json({msg: 'Ha ocurrido un error...'});
            });
        } else {
            res.status(404).json({msg: 'La categoría indicada no fue hallada...'});
        }
    }).catch(err => {
        res.status(500).json({msg: 'Ha ocurrido un error...'});
    });
}


module.exports = {
    getProductos,
    getProductoById,
    crearProducto,
    modificarProducto,
    eliminarProductoById,
	getProductosByCategoriaId
}