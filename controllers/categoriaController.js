const Categoria = require('../models/categoria');

/**
 * Retorna una lista de Categorias en base a los parámetros de búsqueda.
*/
const getCategorias = (req, res) => {
    Categoria.find()
    .then((Categorias) => {
        res.status(200).json(Categorias);
    })
    .catch((err) => {
        res.status(500).json({
            msg: err
        })
    });
}

/**
 * Busca un Categoria por id y lo retorna si es hallado, caso contrario retorna un 404.
*/
const getCategoriaById = (req, res) => {
    console.log(req.params);

    Categoria.findById(req.params.id, (error, Categoria) => {
        if (error) {
            res.status(500).json({error});
        }

        if (Categoria) {
            res.status(200).json(Categoria);
        } else {
            res.status(404).json({
                msg: `La Categoria con el id indicado(${req.params.id}) no fue encontrada`
            });
        }
    })
}

/**
 * Crea una nueva Categoria.
 */
const crearCategoria = (req, res) => {

    const nuevaCategoria = new Categoria(req.body);

    nuevaCategoria.save()
    .then(resultado => {
        
        console.log(resultado);
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
 * Modifica una Categoria existente.
*/
const modificarCategoria = (req, res) => {

    const CategoriaAModificar = req.body;

    // console.log(req);

    Categoria.updateOne({_id: CategoriaAModificar._id}, CategoriaAModificar)
    .then(resultado => {
        
        if (resultado.nModified === 0){
            res.status(404).json({
                msg: `La Categoria con el id indicado(${CategoriaAModificar._id}) no fue encontrada.`
            });
        } else {
            console.log(resultado);
            delete resultado.__v;

            res.status(200).json({
                msg: 'Categoria modificada exitosamente!'
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
 * Elimina una Categoria por id.
*/
const eliminarCategoriaById = (req, res) => {

    // console.log(req);

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