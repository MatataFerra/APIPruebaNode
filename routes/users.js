const express = require('express');
const route = express.Router();

// Endpoint users
route.get('/', (req, res) => {
    const users = [
        {
            nombre: 'Pedro',
            apellido: 'Provenzano'
        },
        {
            nombre: 'Fran',
            apellido: 'Fog'
        },
        {
            nombre: 'Mati',
            apellido: 'Ferra'
        },
        {
            nombre: 'Cosme',
            apellido: 'Fulanito'
        },
        {
            nombre: 'Seymour',
            apellido: 'Skinner'
        }
    ]
    res.json(users); // Prueba
});

route.post('/', (req, res) => {
    // Crear usuario

    res.sendStatus(201);
});


module.exports = route;