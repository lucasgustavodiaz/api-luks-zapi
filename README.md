# api-luks-zapi

# Usuarios de prueba para mercadopago

```javascript
//Tener en cuanta que estos usuarios son solo para Testing, y en caso de no ser utilizados durante 60 dias corridos, seran automaticamente eliminados de mercadopago


//Vendedor
{
    "nickname": "TETE7336008",
    "password": "hSiIlQ2Lqr",
}

//cliente
{
    "nickname": "TESTHILHGSOY",
    "password": "i9E70PDgRg",
}
```

# Deploy Heroku

- Instalar Heroku CLI
- Sincronizar la primas con el postgres de heroku
  - No se puede utilizar migrate (al menos por el momento) usar:
  ```javascript
      npx prisma db push --preview-feature
  ```
  - Correr el Seed:
  ```javascript
     npm run seed
  ```
- Realizar el build de typescript
  - Modificar el entrypoint de la app (./dis/src/index.js)
  - Agregar los scripts "start" y "build"
  - Tener en cuenta los rootDirs y outDir en tsconfig.json
- Crear el archivo Procfile en el root del proyecto ("web: node dist/src/index.js")

```json
// EndPoints para test
// https://api-luks-zapi.herokuapp.com/

// Crear usuario admin POST
// https://api-luks-zapi.herokuapp.com/api/v1/auth/signin

{
  "name": "Test",
  "email": "test@test.com",
  "password": "test123",
  "roleId": 1
}

// Crear cliente POST
// https://api-luks-zapi.herokuapp.com/api/v1/auth/signin

{
  "name": "Cliente",
  "email": "cliente@cliente.com",
  "password": "cliente123",
  "roleId": 2
}

//Login POST
// https://api-luks-zapi.herokuapp.com/api/v1/auth/login

{
  "email": "cliente@cliente.com",
  "password": "cliente123"
}

//Login POST
// https://api-luks-zapi.herokuapp.com/api/v1/auth/login

{
  "email": "cliente@cliente.com",
  "password": "cliente123"
}

//Ver categorias GET
// https://api-luks-zapi.herokuapp.com/api/v1/category

// Crear Orden POST
// https://api-luks-zapi.herokuapp.com/api/v1/orders

{
  "userId": 1,
  "shippingDetails": {
    "domicilio": "T. Fels 785",
    "localidad": "Santa Rosa"
  },
  "items": [
    {
      "title": "Pizza Tranca",
      "quantity": 1,
      "unitPrice": 100,
      "productId": 2
    }
  ],
  "shippingPrice": 100,
  "subtotal": 100,
  "total": 200
}
```
