const db = require('./database');
const personasControl={};



personasControl.getPersonas = (req,res)=>{ //desde la Base de Datos
    console.log("Esto en personas")
    db.query("Select * FROM persona", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

module.exports=personasControl;