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
    |_query_|string|Filtro de búsqueda por nombre de la categoría.| No |

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

  - **Response Body(200)**:

    ```yaml
    [ 
      {
      'id': 3,
      'username': 'user2',   
      'email': 'user@test.com',
      'nombre': 'Juan Test'
      },
      {
      'id': 2,
      'username': 'user',   
      'email': 'user@test.com',
      'nombre': 'Juan Test'
      }
    ] 
    ```
  - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
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

    - **Response Body(200)**:

    ```yaml
    [ 
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
    ] 
    ```
  - **Response Body(400-500)**:
    ```yaml
    {
      'msg': '<Mensaje acorde al problema>'
    }
    ```
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
            'codigoProducto': 'prod265',
            'nombre': 'Nombre del Producto2' ,  
            'stock': 9999,
            'marca': 'Marca',
            'precio': 999.9,
            'categoria': {
              'id': 3,
              'nombre': 'categoria'
          }
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
        'codigoProducto': 'prod265',
        'nombre': 'Nombre del Producto2' ,  
        'stock': 9999,
        'marca': 'Marca',
        'precio': 999.9,
        'categoria': {
          'id': 3,
          'nombre': 'categoria'
        }
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
