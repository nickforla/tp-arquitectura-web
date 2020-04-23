# Trabajo Práctico - Arquitectura Web
Este repositorio contiene el código del trabajo práctico realizado para la materia Arquitectura Web - Universidad de Palermo. El negocio seleccionado es una API REST desarrollada en NodeJS que expone endpoints para gestionar las operaciones básicas CRUD de productos de supermercado para una tienda online y otros adicionales que permiten obtener datos relevantes.  
MongoDB ha sido la tecnología NoSQL seleccionada para almacenar estos recursos.

## Integrantes del Grupo
- Hugo Centurión
- Nicolás Forlano

## Instalación
### Requerimientos

## Endpoints
- Productos
  - Obtener Productos
    - Verbo HTTP: GET
    - Endpoint: /productos
    - Parámetros:
      - limit
      - offset
  - Obtener Producto
    - Verbo HTTP: GET
    - Endpoint: /productos/{idProducto}
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
      - 404 NOT FOUND
  - Crear Producto
    - Verbo HTTP: POST
    - Endpoint: /productos
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
  - Modificar Producto
    - Verbo HTTP: PUT
    - Endpoint: /productos
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
  - Eliminar Producto
    - Verbo HTTP: DELETE
    - Endpoint: /productos/{idProducto}
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
      - 404 NOT FOUND
- Categorías
  - Obtener Categorías
    - Verbo HTTP: GET
    - Endpoint: /categorias
    - Parámetros:
      - limit
      - offset
  - Obtener Categoría
    - Verbo HTTP: GET
    - Endpoint: /categorias/{idCategoria}
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
      - 404 NOT FOUND
  - Crear Categoría
    - Verbo HTTP: POST
    - Endpoint: /categorias
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
  - Modificar Categoría
    - Verbo HTTP: PUT
    - Endpoint: /categorias
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
  - Eliminar Categoría
    - Verbo HTTP: DELETE
    - Endpoint: /categorias/{idCategorias}
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
      - 404 NOT FOUND
  - Obtener Productos de una Categoría
    - Verbo HTTP: GET
    - Endpoint: /categorias/{idCategoria}/productos
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
      - 404 NOT FOUND
- Usuarios
  - Obtener Usuarios
    - Verbo HTTP: GET
    - Endpoint: /usuarios
    - Parámetros:
      - limit
      - offset
  - Obtener Usuario
    - Verbo HTTP: GET
    - Endpoint: /usuarios/{idUsuario}
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
      - 404 NOT FOUND
  - Crear Usuario
    - Verbo HTTP: POST
    - Endpoint: /usuarios
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
  - Modificar Usuario
    - Verbo HTTP: PUT
    - Endpoint: /usuarios
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
  - Eliminar Usuario
    - Verbo HTTP: DELETE
    - Endpoint: /usuarios/{idUsuario}
    - Códigos de Error Posibles:
      - 400 BAD REQUEST
      - 404 NOT FOUND
- Checkout
- Login
- Logout

