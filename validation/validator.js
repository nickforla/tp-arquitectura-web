function productoValidator(req, res, next) {

    //Validación codigoProducto
    req.check('codigoProducto', 'Codigo de Producto no puede estar vacío').notEmpty();
    //Validación nombre
    req.check('nombre', 'Nombre no puede estar vacío').notEmpty();
    //Validación stock
    req.check('stock', 'Stock no puede estar vacío').notEmpty();
    //Validación marca
    req.check('marca', 'Marca no puede estar vacío').notEmpty();
    //Validación precio
    req.check('precio', 'Precio no puede estar vacío').notEmpty();
    //Validación categoría
    req.check('categoria', 'Categoria no puede estar vacío').notEmpty();
    req.check('categoria.id', 'Categoria ID no puede estar vacío').notEmpty();
    req.check('categoria.nombre', 'Nombre Categoria no puede estar vacío').notEmpty();

    const errors = req.validationErrors();
    if(errors) {
        const firstError = errors.map((err) => err.msg)[0];
        return res.status(400).json({msg: firstError});
    }

    next();
}

function categoriaValidator(req, res, next) {
    
    //Validaciones
    
    //Resultado
    const errors = req.validationErrors();
    if(errors) {
        const firstError = errors.map((err) => err.msg)[0];
        return res.status(400).json({msg: firstError});
    }   
}

module.exports = {
    productoValidator
}