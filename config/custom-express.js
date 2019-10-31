let express = require("express");
let consign = require('consign');
let bodyParser = require("body-parser");
let validator = require('express-validator');
let mongo = require("mongo");

module.exports = () => {
    let app = express();

    app.use(bodyParser.urlencoded({ extended: true })); //habilitando Body Parser 
    app.use(bodyParser.json()); //habilitando Body Parsers

    app.use(validator());

    consign()
        .include('rotas')
        .then('persistencia')
        .into(app);

    return app;
}