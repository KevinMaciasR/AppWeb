const db = require('./database');
const negociosControl = {};


negociosControl.getNegocios = (req, res) => { //desde la Base de Datos
    console.log("Esto en negocios")
    db.query("Select * FROM negocio", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}
module.exports = negociosControl;