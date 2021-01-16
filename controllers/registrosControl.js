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
registrosControl.getRegistroCond=(req,res)=>{
    console.log(req.params.CondTemp)
    db.query('SELECT * FROM registro WHERE temperatura>=?',req.params.CondTemp, 
    (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
        console.log(result)
    });
}

module.exports=registrosControl;