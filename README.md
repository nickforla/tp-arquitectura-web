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
      - _limit_ -> Cantidad de resultados.
      - _offset_ -> Comenzando desde.
      - _query_ -> Filtro de búsqueda por nombre del producto.
      - _precio-desde_ -> Precio mínimo del producto.
      - _precio-hasta_ -> Precio máximo del producto.
  - **_Obtener Producto_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /productos/{idProducto}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
  - **_Crear Producto_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /productos
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Modificar Producto_**
    - **Verbo HTTP**: PUT
    - **Endpoint**: /productos
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Eliminar Producto_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /productos/{idProducto}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
- **Categorías**
  - **_Obtener Categorías_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /categorias
    - **Parámetros**:
      - _limit_ -> Cantidad de resultados
      - _offset_ -> Comenzando desde
      - _query_ -> Filtro de búsqueda por nombre de la categoría
  - **_Obtener Categoría_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /categorias/{idCategoria}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
  - **_Crear Categoría_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /categorias
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Modificar Categoría_**
    - **Verbo HTTP**: PUT
    - **Endpoint**: /categorias
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
  - **_Eliminar Categoría_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /categorias/{idCategorias}
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
  - **_Obtener Productos de una Categoría_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /categorias/{idCategoria}/productos
    - **Códigos de Error Posibles**:
      - _**400** BAD REQUEST_
      - _**404** NOT FOUND_
- **Usuarios**
  - **_Obtener Usuarios_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /usuarios
    - **Parámetros**:

    | Nombre | Tipo | Descripción | Requerido |
    | ------ | ---- | ----------- | -- |
    |_limit_|int|Cantidad de resultados|No|
    |_offset_|int|Comenzando desde| No |
    |_query_|string|Filtro de búsqueda por nombre del usuario.| No |
    - **Codigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |500|Internal Server Error|

  - **_Obtener Usuario_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /usuarios/{idUsuario}
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
      'username': 'user',   
      'email': 'user@test.com',
      'nombre': 'Juan Test'
    }
    ```
    - **Response Body(400-404-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```

  - **_Crear Usuario_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /usuarios
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |201|Created|
    |400|Bad Request|
    |500|Internal Server Error|

    - **Request Body (JSON)**:
    ```yaml
      username:  String, requerido
      email:     String, requerido
      nombre:    String, requerido
    ```
    - **Request Body(ejemplo)**:
    ```yaml
    {
      'username': 'user', 
      'email': 'user@test.com',
      'nombre': 'Juan Test'
    }
    ```

    - **Response Body(201)**:
    ```yaml
    {
      'id': 2,
      'username': 'user',
      'email': 'user@test.com',
      'nombre': 'Juan Test'
    }
    ```

    - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
  - **_Modificar Usuario_**
    - **Verbo HTTP**: PUT
    - **Endpoint**: /usuarios
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
      'id': 2
      'username': 'user',
      'email': 'user@gmail.com',
      'nombre': 'Juan Test'
    }
    ```

    - **Response Body(200)**:
    ```yaml
    {
      'id': 2,
      'username': 'user',
      'email': 'user@gmail.com',
      'nombre': 'Juan Test'
    }
    ```

    - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
  - **_Eliminar Usuario_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /usuarios/{idUsuario}
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

- **Pedidos**
  - **_Obtener Pedidos_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /pedidos
    - **Parámetros**:

    | Nombre | Tipo | Descripción | Requerido |
    | ------ | ---- | ----------- | -- |
    |_limit_|int|Cantidad de resultados|No|
    |_offset_|int|Comenzando desde| No |
    |_query_|string|Filtro de búsqueda por nombre los productos.| No |
    |_importe_hasta_|float|Importe mínimo del pedido| No |
    |_importe_desde_|float|Importe máximo del pedido| No |
    |_fecha_desde_|float|Fecha desde la cuál se buscan(YYYY-MM-DD)| Sí |
    |_fecha_hasta_|float|Fecha hasta la cuál se buscan(YYYY-MM-DD)| Sí |

    - **Codigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |500|Internal Server Error|

  - **_Obtener Pedido_**
    - **Verbo HTTP**: GET
    - **Endpoint**: /pedidos/{idPedido}

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
      'fecha': '2020-02-01',
      'estado': 'ENTREGADO',
      'productos': [
        {
          'id': 3
          'nombre': 'Pan Integral'
          'precio': 80.0,
          'cantidad': 2
        },
        {
          'id': 21
          'nombre': 'Fideos'
          'precio': 50.0,
          'cantidad': 1
        }
      ],
      'usuario': {
          'id': 2,
          'username': 'user',
          'email': 'user@gmail.com',
          'nombre': 'Juan Test'
        },
      'importeTotal': 210.00
    }

    ```
    - **Response Body(400-404-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
  - **_Crear Pedido_**
    - **Verbo HTTP**: POST
    - **Endpoint**: /pedidos
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |201|Created|
    |400|Bad Request|
    |500|Internal Server Error|

    - **Request Body (JSON)**:
    ```yaml
      productos:  Array de Productos, requerido
    ```

    - **Request Body(ejemplo)**:
    ```yaml
    {
      'productos': [
        {
          'id': 3
          'nombre': 'Pan Integral'
          'precio': 80.0,
          'cantidad': 2
        },
        {
          'id': 21
          'nombre': 'Fideos'
          'precio': 50.0,
          'cantidad': 1
        }
      ]
    }
    ```

    - **Response Body(201)**:
    ```yaml
    {
      'id': 2,
      'fecha': '2020-02-01',
      'estado': 'GENERADO',
      'productos': [
        {
          'id': 3
          'nombre': 'Pan Integral'
          'precio': 80.0,
          'cantidad': 2
        },
        {
          'id': 21
          'nombre': 'Fideos'
          'precio': 50.0,
          'cantidad': 1
        }
      ],
      'usuario': {
          'id': 2,
          'username': 'user',
          'email': 'user@gmail.com',
          'nombre': 'Juan Test'
        },
      'importeTotal': 210.00
    }
    ```

    - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
    
  - **_Eliminar producto de un pedido_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /pedidos/{idPedido}/productos/{idPedido}
     - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

  - **_Modificar Cantidad de un Producto_**
    - **Verbo HTTP**: PATCH
    - **Endpoint**: /pedidos/{idPedido}/productos/{idProducto}
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

    - **Request Body (JSON)**:
    ```yaml
      cantidad:  Int, requerido
    ```

    - **Request Body (ejemplo)**::
    ```yaml
      {
        'cantidad': 3
      }
    ```

    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|
    
  - **_Modificar Estado Pedido_**
    - **Verbo HTTP**: PATCH
    - **Endpoint**: /pedidos/{idPedido}/estados
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|

    - **Request Body (JSON)**:
    ```yaml
      estado:  String {1: GENERADO, 2: PREPARADO o 3: ENTREGADO}, requerido
    ```

    - **Request Body (ejemplo)**::
    ```yaml
      {
        'estado': 3
      }
    ```

  - **_Cancelar Pedido_**
    - **Verbo HTTP**: DELETE
    - **Endpoint**: /pedidos/{idPedido}
    - **Códigos de Respuesta**:

    | Código HTTP | Descripción |
    | ------ | ---- |
    |200|OK|
    |400|Bad Request|
    |404|Not Found|
    |500|Internal Server Error|
- **Estados Posibles de Pedidos**:

  | Id | Estado | Descripción |
  | ------ | ------ | ---- |
  |1|GENERADO|El pedido fue generado|
  |2|PREPARADO|El pedido fue preparado|
  |3|ENTREGADO|El pedido fue entregado|