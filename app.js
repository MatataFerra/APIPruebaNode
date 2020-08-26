const express = require('express');
const app = express();

const cors = require('cors');

const port = process.env.PORT || 3000;


// ROUTES
const UsersMiddleware = require('./middleware/users'); // Paso uno para routear
const UsersRoute = require('./routes/users'); 
const PhotosRoute = require('./routes/photos');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola desde nodejs');
})

/* MIDDLEWARE generico

app.use((req, res, next) => {
    next();
});
*/

// ROUTES
app.use('/users', UsersMiddleware, UsersRoute); // Para que funcione
app.use('/photos', PhotosRoute);


app.listen(port, () => {
    console.log("Pude levantar el servidor");
})

// npm install --save express