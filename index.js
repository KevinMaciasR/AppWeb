const App = require('./App');
const port=App.get('port');


App.listen(port, ()=> {
    console.log(`Iniciar Página web con http://localhost:${port}`);
})


//const express=require('express')
//const server=express();//Crea el servidor
/*server.get('/', function(req,resp){//req: datos que envia el cliente al servidor |||| resp: datos que se envian hcia al cliente 
    resp.send("<h1>Hola</h1>")
    
})
*/
//rutas 
/*server.listen(8080,//puerto del servidor web es 8080
()=>{console.log("Iniciar Página web con http://localhost:8080")})
*/
//npx nodemon ./AppWeb/index.js Para iniciar