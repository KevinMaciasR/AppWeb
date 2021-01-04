const {Router}=require('express');
const router = Router();
const {getUsuarios,getUsuario,postUsuario,putUsuario,deleteUsuario} = require('../controllers/usuariosControl');

router.route('/')
//llama a la funciones que se encuentran en el archivo registrosControl
   .get(getUsuarios)
   .post(postUsuario);
router.route('/:nombre')// este '/:nombre' será usado en la sintaxis del query para selecionar el nombre de la columna de la tabla
     //.get(getUsuario)   
     .put(putUsuario)
     .delete(deleteUsuario);
router.route('/:email')
     .get(getUsuario)
module.exports=router
