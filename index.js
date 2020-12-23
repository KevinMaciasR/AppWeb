const http =require('http')
http.createServer(function(req,resp){ //req: datos que envia el cliente resp: datos que se envian hcia al cliente 
resp.write("<h1>Hola</h1>")
}).listen(8080);//puerto del servidor web