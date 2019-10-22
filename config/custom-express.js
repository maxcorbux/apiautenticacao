let express = require("express");
let consign = require('consign');
let bodyParser = require("body-parser");

module.exports = () => {
    let app = express();

    app.use(bodyParser.urlencoded({ extended: true })); //habilitando Body Parser 
    app.use(bodyParser.json()); //habilitando Body Parser 

    consign()
        .include('rotas')
        .then('persistencia')
        .into(app);

    return app;
}