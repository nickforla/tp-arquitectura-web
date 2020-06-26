# Trabajo Práctico - Arquitectura Web
Este repositorio contiene el código del trabajo práctico realizado para la materia Arquitectura Web - Universidad de Palermo. El negocio seleccionado es una API REST desarrollada en NodeJS que expone endpoints para gestionar las operaciones básicas CRUD de productos de supermercado para una tienda online y otros adicionales que permiten obtener datos relevantes.  
MongoDB ha sido la tecnología NoSQL seleccionada para almacenar estos recursos.

## Integrantes del Grupo
- Hugo Centurión
- Nicolás Forlano

## Instalación
### Requerimientos

## Endpoints
- **Productos**
  - **_Obtener Productos_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /productos
    - **Parámetros**:

    | Nombre | Tipo | Descripción | Requerido |
    | ------ | ---- | ----------- | -- |
    |_limit_|int|Cantidad de resultados| No |
    |_offset_|int|Comenzando desde| No |
    |_nombre_|string|Filtro de búsqueda por nombre del producto.| No |
    | _precioDesde_|float|Precio mínimo del producto.| No |
    | _precioHasta_|float|Precio máximo del producto.| No |
    | _marca_|string|Marca del producto.| No |
    | _categoriaNombre_|string|Nombre de la categoría del producto.| No |
    | _codigoProducto_|string|Código del producto.| No |
    | _stockDesde_|string|Stock mínimo del producto.| No |
    | _stockHasta_|string|Stock máximo del producto.| No |

    - **Codigos de Respuesta**:

    | HTTP Code  | Descripción          |
    | :--------  | :----------------    |
    | 200        | OK                   |
    | 400        | Bad Request          |
    | 500        | Internal Server Error|

  - **Response Body(200)**:

    ```yaml
    [ 
      {
        'id': 2,
        'codigoProducto': 'prod123',
        'nombre': 'Nombre del Producto' ,  
        'stock': 9999,
        'marca': 'Marca',
        'precio': 999.9,
        'categoria': {
          'id': 2,
          'nombre': 'categoria'
        }
      },
      {
        'id': 2,
        'codigoProducto': 'prod123',
        'nombre': 'Nombre del Producto' ,  
        'stock': 9999,
        'marca': 'Marca',
        'precio': 999.9,
        'categoria': {
          'id': 2,
          'nombre': 'categoria'
        }
        }
    ] 
    ```
  - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Obtener Producto_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /productos/{idProducto}
    - **Códigos de Respuesta**:

    | HTTP Code  | Descripción          |
    | :--------  | :----------------    |
    | 200        | OK                   |
    | 400        | Bad Request          |
    | 404        | not Found            |
    | 500        | Internal Server Error|

    - **Response Body(200)**:
    ```yaml
    {
      'id': 2,
      'codigoProducto': 'prod123',
      'nombre': 'Nombre del Producto' ,  
      'stock': 9999,
      'marca': 'Marca',
      'precio': 999.9,
      'categoria': {
        'id': 2,
        'nombre': 'categoria'
      }
    }
    ```
    - **Response Body(400-404-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Crear Producto_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /productos
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción          |
    | :---------  | :--------            |
    | 201         | Created              |
    | 400         | Bad Request          |
    | 500         | Internal Server Error|

     - **Request Body (JSON)**:
    ```yaml
      codigoProducto:  String, requerido
      nombre:     String, requerido
      stock: int, requerido
      marca:    String, requerido
      precio: float, requerido
      categoria: {
        id: int, requerido
      }
    ```
    - **Request Body(ejemplo)**:
    ```yaml
    {
      'codigoProducto': 'prod123', 
      'nombre': 'Nombre',
      'stock': 123,
      'marca': 'Marca',
      'precio': 54.21,
      'categoria': {
        'id': 2
      }
    }
    ```

    - **Response Body(201)**:
    ```yaml
    {
      'id': 2,
      'codigoProducto': 'prod123',
      'nombre': 'Nombre del Producto' ,  
      'stock': 9999,
      'marca': 'Marca',
      'precio': 999.9,
      'categoria': {
        'id': 2,
        'nombre': 'categoria'
      }
    }
    ```

    - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Modificar Producto_**
    - **Verbo HTTP**: PUT
    - **Endpoint**: /productos
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

    - **Request Body(ejemplo)**:
    ```yaml
    {
      'id': 2,
      'codigoProducto': 'prod123',
      'nombre': 'Nombre del Producto' ,  
      'stock': 9999,
      'marca': 'Marca',
      'precio': 999.9,
      'categoria': {
        'id': 3,
        'nombre': 'categoria3'
      }
    }
    ```
    - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
  - **_Eliminar Producto_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /productos/{idProducto}
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|
      
- **Categorías**
  - **_Obtener Categorías_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /categorias
    - **Parámetros**:

    | Nombre | Tipo | Descripción | Requerido |
    | ------ | ---- | ----------- | -- |
    |_limit_|int|Cantidad de resultados|No|
    |_offset_|int|Comenzando desde| No |
    |_nombre_|string|Filtro de búsqueda por nombre de la categoría.| No |

    - **Codigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |500|Internal Server Error|

  - **Response Body(200)**:

    ```yaml
    [ 
      {
      'id': 1,
      'nombre': 'cat1'
      },
      {
      'id': 2,
      'nombre': 'cat2'
      }
    ] 
    ```
  - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
  - **_Obtener Categoría_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /categorias/{idCategoria}
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

    - **Response Body(200)**:

    ```yaml
    {
      'id': 45,
      'nombre': 'Limpieza'
    }
    ```
    - **Response Body(400-404-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Crear Categoría_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /categorias
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |201|Created|
    |400|Bad Request|
    |500|Internal Server Error|

    - **Request Body (JSON)**:
    ```yaml
      name: Nombre de la categoria, requerido
    ```

    - **Request Body(ejemplo)**:
    ```yaml
    {
      'name':'Nombre de la categoria'
    }

    ```
    - **Response Body(201)**:
    ```yaml
    {
      'id': 2,
      'name':'Nombre de la categoria'
    }

    ```
    - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Modificar Categoría_**
    - **Verbo HTTP**: PUT
    - **Endpoint**: /categorias
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

    - **Request Body(ejemplo)**:
    ```yaml
    {
      'id': 23,
      'name':'Nombre de la categoria2'
    }
    ```
    - **Response Body(400-404-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Eliminar Categoría_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /categorias/{idCategoria}
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|
    
  - **_Obtener Productos de una Categoría_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /categorias/{idCategoria}/productos
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|
    
    - **Response Body(200)**:
    ```yaml
    [
        {
          'id': 2,
          'codigoProducto': 'prod123',
          'nombre': 'Leche',  
          'stock': 80.0,
          'marca': 'La serenisma',
          'precio': 999.9,
          'categoria': {
            'id': 3,
            'nombre': 'Lacteos'
          }
        },
        {
          'id': 3,
          'codigoProducto': 'prod256',
          'nombre': 'Huevos',  
          'stock': 80.0,
          'marca': 'Matarazzo',
          'precio': 54.9,
          'categoria': {
            'id': 3,
            'nombre': 'Lacteos'
          }
        },
        {
          'id': 4,
          'codigoProducto': 'prod987',
          'nombre': 'Yogurt',  
          'stock': 80.0,
          'marca': 'La Serenisma',
          'precio': 54.9,
          'categoria': {
            'id': 3,
            'nombre': 'Lacteos'
          }
        }
      ]

    ```
    - **Response Body(400-404-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```