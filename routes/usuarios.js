const { Router } = require('express');
const router = Router();
const { getUsuarios, getUsuarioEma, postUsuario } = require('../controllers/usuariosControl');

router.route('/')
     //llama a la funciones que se encuentran en el archivo registrosControl
     .get(getUsuarios)
     .post(postUsuario);

router.route('/:email')
     .get(getUsuarioEma);

module.exports = router
