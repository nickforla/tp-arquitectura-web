const buildProductosQuery = (requestQuery = {}) => {

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

const buildCategoriasQuery = (requestQuery = {}) => {

    let query = {};

    if(requestQuery.nombre) {
        query.nombre = {$regex: requestQuery.nombre, $options: 'i' };
    }

    return query;
}

module.exports = {
    buildProductosQuery,
    buildCategoriasQuery
}