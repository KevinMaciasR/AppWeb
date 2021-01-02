const {Router}=require('express');
const router = Router();
const {getNegocios} = require('../controllers/negociosControl');

router.route('/')
//llama a la funciones que se encuentran en el archivo negociosControl
    .get(getNegocios);

module.exports=router