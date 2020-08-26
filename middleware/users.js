const express = require('express');
const route = express.Router();


route.use('/', (req, res, next) => {
    console.log("Esto es un middleware para /users");
        next(); // Ejecuta el siguiente app.use respecto al endpoint (porque fue aclarado)
});

module.exports = route;