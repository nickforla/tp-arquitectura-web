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
      - _limit_
      - _offset_
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
  - **__Modificar Producto__**
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
      - _limit_
      - _offset_
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
      - _limit_
      - _offset_
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
- Checkout
- Login
- Logout

