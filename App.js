const path = require('path')
const express = require('express');
const cors = require('cors');
const server = express();
//Configuraciones
server.set('port', 8080);

//Middlewares
server.use(cors());
server.use(express.json());

//Rutas 
//usa las funciones quye se encuentran en el archivo personas y se le pide adicionar "/el nombre de la tabla" (Ej: '/personas') para acceder a la funcino especifica de las funcinoes en router, que a su vez llmanan a las funciones get,post, delete... ubicada en el archivo registrosControles
server.use('/personas', require('./routes/personas')); //si es que el cliente hace una peticion a persona, el servidor va a requerir o importar el archivo que esta en la carpeta router/personas
server.use('/registros', require('./routes/registros'));
server.use('/negocios', require('./routes/negocios'))
server.use('/usuarios', require('./routes/usuarios'))

module.exports = server;