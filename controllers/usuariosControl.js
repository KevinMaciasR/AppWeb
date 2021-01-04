const db = require('./database');
const usuariosControl={};

usuariosControl.getUsuarios = (req,res)=>{ //desde la Base de Datos. Get de todos los usuarios
    db.query("Select * FROM usuario", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}
/*usuariosControl.getUsuario = (req,res)=>{ //usando Base de Datos, consulta con "nombre"
console.log(("Usuario consultado: "+req.params.nombre));
    db.query('SELECT * FROM usuario WHERE nombre=?',req.params.nombre, 
    (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}*/
usuariosControl.getUsuario = (req,res)=>{ //usando Base de Datos, consulta con "email"
console.log(("Usuario consultado: "+req.params.email));
    db.query('SELECT * FROM usuario WHERE email=?',req.params.email, 
    (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
        
    });
}
usuariosControl.postUsuario = (req,res)=>{ //desde la Base de datos. Para Añadir Usuario
    const {nombre,email,contraseña} = req.body;
    if(!nombre || !email || !contraseña ){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    let SQLbody = {};
    if(!nombre) SQLbody = {email,contraseña};
    else    SQLbody = {nombre,email,contraseña};
    
    db.query("INSERT INTO usuario SET ?", [SQLbody],
    (err,result)=>{
        if (err) {
            res.status(500).send(err+"Error-Status");//error de usuario duplicado
            console.log(err);
            return;
        }
        res.send('Usuario insertado: '+nombre);
    });
}
usuariosControl.putUsuario = (req,res)=>{//desde la base. Para modificar un Usuario
    const {nombre,email,contraseña} = req.body;
    let SQLbody = {};
    if(!nombre) SQLbody = {email,contraseña};
    else    SQLbody = {nombre,email,contraseña}; 
    console.log("Usuario modificado : "+nombre);
    db.query('UPDATE usuario SET ? WHERE nombre=?',[SQLbody,nombre], (err,result)=>{  
        if(!err)
        res.send("El usuario ha sido modificado");
        else
        console.log(err);

     } );
}
usuariosControl.deleteUsuario = (req,res)=>{//desdela base. Para Elimiar un usuario
    console.log(("Usuario eliminado: "+req.params.nombre));
        db.query("DELETE FROM usuario WHERE nombre=?",req.params.nombre, (err,result,fields)=>{
        if(!err)
        res.send("El usuario ha sido eliminado");
        else
        console.log(err);
    });
}
module.exports=usuariosControl;