const Producto = require('../models/producto');
const Categoria = require('../models/categoria');

/**
 * Retorna una lista de productos en base a los parámetros de búsqueda.
*/
const getProductos = (req, res) => {
    //console.log(req.query);

    const limit = req.query.limit ? req.query.limit : 10;
    const offset = req.query.offset ? req.query.offset : 0;
    delete req.query.offset;
    delete req.query.limit;
    
    let query = {};
	
	if(req.query.codigoProducto) {
        query.codigoProducto = req.query.codigoProducto;
    }
	
	if(req.query.nombre) {
        query.nombre = req.query.nombre;
    }
	
	if(req.query.marca) {
        query.marca = req.query.marca;
    }
	
	if(req.query.stock) {
		query.stock = {$gte: Number.parseFloat(req.query.stock)};
	}
	
    if(req.query.precio_desde) {
		
        if(req.query.precio_hasta) {
		query.precio = { $gte: Number.parseFloat(req.query.precio_desde), $lte: Number.parseFloat(req.query.precio_hasta) } ;
		
        } else {
            query.precio = {$gte: Number.parseFloat(req.query.precio_desde)};
		}
    } else if(req.query.precio_hasta) {
        query.precio = {$lte: Number.parseFloat(req.query.precio_hasta)};
    } 
	
	console.log(query);  
   
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
    console.log(req.params);

    Producto.findById(req.params.id, (error, producto) => {
        if (error) {
            res.status(500).json({error});
        }

        if (producto) {
            res.status(200).json(producto);
        } else {
            res.status(404).json({
                msg: `El producto con el id indicado(${req.params.id}) no fue encontrado`
            });
        }
    })
}

/**
 * Crea un nuevo producto.
 */
const crearProducto = (req, res) => {

    const nuevoProducto = new Producto(req.body);

    nuevoProducto.save()
    .then(resultado => {
        delete resultado.__v;

        res.status(201).json(resultado);
    })
    .catch(error => {
        console.log(error);
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
            console.log(resultado);
            delete resultado.__v;

            res.status(200).json({
                msg: 'Producto modificado exitosamente!'
            });
        }
    })
    .catch(error => {
        console.log(error);
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
        console.log(err);
        res.status(500).json({msg: 'Ha ocurrido un error'});
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