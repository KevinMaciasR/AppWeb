const {Router}=require('express');
const router = Router();
const {getUsuarios,postUsuario,putUsuario,deleteUsuario} = require('../controllers/usuariosControl');

router.route('/')
//llama a la funciones que se encuentran en el archivo registrosControl
   .get(getUsuarios)
   .post(postUsuario);
router.route('/:nombre')   
     .put(putUsuario)
     .delete(deleteUsuario);

module.exports=router