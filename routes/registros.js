const {Router}=require('express');
const router = Router();
const {getRegistros,getRegistroCond} = require('../controllers/registrosControl');

router.route('/')
//llama a la funciones que se encuentran en el archivo registrosControl
   .get(getRegistros);
router.route('/:CondTemp')
       .get(getRegistroCond)

module.exports=router