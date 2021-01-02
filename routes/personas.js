const {Router}=require('express');
const router = Router();
const {getPersonas} = require('../controllers/personasControl');

router.route('/')
//llama a la funciones que se encuentran en el archivo personasControl
   .get(getPersonas); 
   //.get(getRegistros);
   //.get(getNegocios);

module.exports=router

//hacer varios archivos. Toca
