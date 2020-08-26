const express = require('express');
const route = express.Router();

// Endpoint users
route.get('/', (req, res) => {
    const photos = [
        {
            titulo: "Paisaje",
            url: "https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg",
            descripcion: "Paisaje montanioso"
        },
        {
            titulo: "Los simpsons",
            url: "https://s1.eestatic.com/2020/04/17/imprescindibles/Branded_Content-Marcas_destacadas-Amazon-Los_Simpson-Juguetes-Los_Imprescindibles_483212540_150470161_1024x576.jpg",
            descripcion: "La familia en el sillon"
        }
    ]
    res.json(photos); // Prueba
});

route.post('/', (req, res) => {
    // Crear usuario

    res.sendStatus(201);
});


module.exports = route;