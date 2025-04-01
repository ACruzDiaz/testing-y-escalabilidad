# Documentación: mocks.router.js

## Propósito
Crear un router que permita manejar rutas base relacionadas con la generación y manipulación de datos de prueba (mocking), bajo la ruta base `/api/mocks`.

---

## Endpoints

### 1. `/mockingpets` (GET)
**Descripción:** Mueve el endpoint desarrollado previamente en el primer Desafío Entregable al router `mocks.router.js`. Este endpoint se encargará de proveer datos relacionados con mascotas de prueba.

---

### 2. `/mockingusers` (GET)
**Descripción:** Genera 50 usuarios de prueba utilizando un módulo Mocking. Los usuarios tendrán el siguiente formato:
- `password`: Contraseña encriptada (`coder123`).
- `role`: Valores variables entre `user` y `admin`.
- `pets`: Array vacío.

**Respuesta esperada:** Lista de 50 usuarios en formato similar al de una petición de MongoDB.

---

### 3. `/generateData` (POST)
**Descripción:** Recibe parámetros numéricos `users` y `pets`. Este endpoint se encargará de:
- Generar e insertar en la base de datos la cantidad de registros especificada.
- Comprobar los registros insertados utilizando los servicios GET de `users` y `pets`.

**Parámetros esperados:**
- `users`: Número entero que indica la cantidad de usuarios a generar.
- `pets`: Número entero que indica la cantidad de registros de mascotas a generar.

**Respuesta esperada:**
Confirmación del número de registros de usuarios y mascotas insertados exitosamente.

---

## Módulo Mocking: mockUsers()
**Descripción:** Genera usuarios con las siguientes características:
- `password`: Contraseña encriptada con valor `coder123`.
- `role`: Aleatorio entre `user` y `admin`.
- `pets`: Array vacío.

**Uso:** Este módulo será utilizado en el endpoint `/mockingusers`.

---

## Especificaciones técnicas
- **Router base:** `/api/mocks`
- **Archivo:** `mocks.router.js`
- **Dependencias:** `bcrypt` para encriptar contraseñas, `mongoose` para la manipulación de la base de datos.

---

## Ejemplo: Endpoint `/mockingusers`

**Solicitud (GET):**
GET /api/mocks/mockingusers


**Respuesta:**
```json
[
  {
    "username": "usuario1",
    "password": "$2b$10$...",
    "role": "user",
    "pets": []
  },
  {
    "username": "usuario2",
    "password": "$2b$10$...",
    "role": "admin",
    "pets": []
  },
  ...
]
```

## Ejemplo: Endpoint `/generateData`

**Solicitud (POST):**
POST /api/mocks/generateData

```json
{
  "users": 10,
  "pets": 15
}
```

**Respuesta:**

```json
{
  "message": "Se han insertado 10 usuarios y 15 registros de mascotas exitosamente."
}
```
