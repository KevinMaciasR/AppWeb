const express=require('express')
const server=express();//Crea el servidor
server.get('/', function(req,resp){//req: datos que envia el cliente al servidor |||| resp: datos que se envian hcia al cliente 
    resp.send("<h1>Hola</h1>")
    
})
server.listen(8080,//puerto del servidor web es 8080
()=>{console.log("Iniciar Página web con http://localhost:8080")})
