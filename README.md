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
    |_query_|string|Filtro de búsqueda por nombre del usuario.| No |
    | _precio-desde_|float|Precio mínimo del producto.| No |
    | _precio-desde_|float|Precio máximo del producto.| No |

    - **Codigos de Respuesta**:

    | HTTP Code  | Descripción          |
    | :--------  | :----------------    |
    | 200        | OK                   |
    | 400        | Bad Request          |
    | 500        | Internal Server Error|


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
      'product_code': 'prod123',
      'nombre': 'Nobre del Producto' ,  
      'inventory_count': 9999,
      'brand': 'Marca',
      'precio': 999.9
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
      product_code:  String, requerido
      title:     String, requerido
      brand:    String, requerido
    ```
    - **Request Body(ejemplo)**:
    ```yaml
    {
      'product_code': 'prod123', 
      'nombre': 'Nombre del Producto',
      'brand': 'Marca'
    }
    ```

    - **Response Body(201)**:
    ```yaml
    {
      'id': 2,
      'product_code': 'prod123',
      'nombre': 'Nobre del Producto' ,  
      'inventory_count': 0,
      'brand': 'Marca',
      'precio': 000.0
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
      'product_code': 'prod123',
      'nombre': 'Nobre del Producto' ,  
      'inventory_count': 9999,
      'brand': 'Marca',
      'precio': 999.9
    }
    ```
    
    - **Response Body(200)**:
    ```yaml
    {
      'id': 2,
      'product_code': 'prod123',
      'nombre': 'Nobre del Producto' ,  
      'inventory_count': 9999,
      'brand': 'Marca',
      'precio': 999.9
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
    |_query_|string|Filtro de búsqueda por nombre de la categoría.| No |

    - **Codigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |500|Internal Server Error|

  - **_Obtener Categoría_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /categorias/
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
      [ "Nombre de la categoria 1", "Nombre de la categoria 2", "Nombre de la categoria 3" ] 
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
      productos:  Array de Productos, requerido
    ```

    - **Request Body(ejemplo)**:
    ```yaml
    {
      'id': 2,
      'name':'Nombre de la categoria',
      'productos': [
        {
          'id': 2,
          'nombre': 'Pan Integral',
          'precio': 80.0,
          'brand': 'Bimbo',
        },
        {
          'id': 3,
          'nombre': 'Fideos',
          'precio': 50.0,
          'brand': 'Matarazzo',
        },
        {
          'id': 4,
          'nombre': 'Azúcar',
          'precio': 70.0,
          'brand': 'Ledesma',
        }
      ]
    }

    ```
    - **Response Body(201)**:
    ```yaml
    {
      'id': 2,
      'name':'Nombre de la categoria',
      'productos': [
        {
          'id': 2,
          'nombre': 'Pan Integral',
          'precio': 80.0,
          'brand': 'Bimbo',
        },
        {
          'id': 3,
          'nombre': 'Fideos',
          'precio': 50.0,
          'brand': 'Matarazzo',
        },
        {
          'id': 4,
          'nombre': 'Azúcar',
          'precio': 70.0,
          'brand': 'Ledesma',
        }
      ]
    }

    ```
    - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Modificar Categoría_**
    - **Verbo HTTP**: PATCH
    - **Endpoint**: /categorias/{idCategoria}
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

     - **Request Body (JSON)**:
    ```yaml
      name: Nombre de la categoria
      productos:  Array de Productos
    ```

    - **Request Body(ejemplo)**:
    ```yaml
    {
      'name':'Nombre de la categoria',
      'productos': [
        {
          'id': 2,
          'nombre': 'Pan Integral',
          'precio': 80.0,
          'brand': 'Bimbo',
        },
        {
          'id': 3,
          'nombre': 'Fideos',
          'precio': 50.0,
          'brand': 'Matarazzo',
        },
        {
          'id': 4,
          'nombre': 'Azúcar',
          'precio': 70.0,
          'brand': 'Ledesma',
        }
      ]
    }

    ```

  - **_Eliminar Categoría_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /categorias/{idCategorias}
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
    {
      'id': 2,
      'name':'Nombre de la categoria',
      'productos': [
        {
          'id': 2,
          'nombre': 'Pan Integral',
          'precio': 80.0,
          'brand': 'Bimbo',
        },
        {
          'id': 3,
          'nombre': 'Fideos',
          'precio': 50.0,
          'brand': 'Matarazzo',
        },
        {
          'id': 4,
          'nombre': 'Azúcar',
          'precio': 70.0,
          'brand': 'Ledesma',
        }
      ]
    }

    ```
    - **Response Body(400-404-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

- **Usuarios**
  - **_Obtener Usuarios_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /usuarios
    - **Parámetros**:
      - _limit_ -> Cantidad de resultados
      - _offset_ -> Comenzando desde
      - _query_ -> Filtro de busqueda por nombre de usuario
  - **_Obtener Usuario_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /usuarios/{idUsuario}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
  - **_Crear Usuario_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /usuarios
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Modificar Usuario_**
    - **Verbo HTTP**: PUT
    - **Endpoint**: /usuarios
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Eliminar Usuario_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /usuarios/{idUsuario}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
- **Pedidos**
  - **_Obtener Pedidos_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /pedidos
    - **Parámetros**:
      - _limit_ -> Cantidad de resultados.
      - _offset_ -> Comenzando desde.
      - _query_ -> Filtro de busqueda por nombre de los productos.
      - _importe-desde_ -> Importe mínimo del pedido.
      - _importe-hasta_ -> Importe máximo del pedido.
      - _fecha-desde_ -> Fecha desde la cual se buscan pedidos.
      - _fecha-hasta_ -> Fecha hasta la cual se buscan pedidos.
  - **_Obtener Pedido_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /pedidos/{idPedido}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
  - **_Crear Pedido_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /pedidos
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Modificar Pedido_**
    - **Verbo HTTP**: PUT
    - **Endpoint**: /pedidos
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Cancelar Pedido_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /pedidos/{idPedido}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
