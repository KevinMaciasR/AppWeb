const db = require('./database');
const registrosControl={};



registrosControl.getRegistros = (req,res)=>{ //desde la Base de Datos
    db.query("Select * FROM registro", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}
module.exports=registrosControl;