const App = require('./App');
const port = App.get('port');


App.listen(port, () => {
    console.log(`Iniciar Página web con http://localhost:${port}`);
})

//npx nodemon ./AppWeb/index.js Para iniciar