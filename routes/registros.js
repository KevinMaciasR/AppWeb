const {Router}=require('express');
const router = Router();
const {getRegistros} = require('../controllers/registrosControl');

router.route('/')
//llama a la funciones que se encuentran en el archivo registrosControl
   .get(getRegistros);
   

module.exports=router