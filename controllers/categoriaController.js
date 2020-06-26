const Categoria = require('../models/categoria');
const { buildCategoriasQuery } = require('../services/queryService');

/**
 * Retorna una lista de Categorias en base a los parámetros de búsqueda.
*/
const getCategorias = (req, res) => {

    const limit = req.query.limit ? req.query.limit : 10;
    const offset = req.query.offset ? req.query.offset : 0;

    let query = buildCategoriasQuery(req.query);

    Categoria.find(query)
    .limit(Number.parseInt(limit))
    .skip(Number.parseInt(offset))
    .then((categorias) => {
        res.status(200).json(categorias);
    })
    .catch((err) => {
        res.status(500).json({
            msg: err
        })
    });
	
	
	}

/**
 * Busca una Categoria por id y lo retorna si es hallado, caso contrario retorna un 404.
*/
const getCategoriaById = (req, res) => {

    Categoria.findById(req.params.id)
    .then(categoria => {

        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({
                msg: `La Categoria con el id indicado(${req.params.id}) no fue encontrada`
            });
        }

    })
    .catch((err) => {
        res.status(500).json({
            msg: err
        })
    });
}

/**
 * Crea una nueva Categoria.
 */
const crearCategoria = (req, res) => {

    const nuevaCategoria = new Categoria(req.body);

    nuevaCategoria.save()
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
 * Modifica una Categoria existente.
*/
const modificarCategoria = (req, res) => {

    const CategoriaAModificar = req.body;

    Categoria.updateOne({_id: CategoriaAModificar._id}, CategoriaAModificar)
    .then(resultado => {
        if (resultado.nModified === 0){
            res.status(404).json({
                msg: `La Categoria con el id indicado(${CategoriaAModificar._id}) no fue encontrada.`
            });
        } else {
            res.status(200).json({
                msg: 'Categoria modificada exitosamente!'
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
 * Elimina una Categoria por id.
*/
const eliminarCategoriaById = (req, res) => {

    Categoria.deleteOne({_id: req.params.id})
    .then(result => {
        if (result.deletedCount == 1) {
            res.status(200).json({
                msg: 'Categoria eliminada exitosamente!'
            });
        } else {
            res.status(404).json({
                msg: `La Categoria con el id indicado(${req.params.id}) no fue encontrada.`
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            msg: error
        });
    });
}

module.exports = {
    getCategorias,
    getCategoriaById,
    crearCategoria,
    modificarCategoria,
    eliminarCategoriaById
}