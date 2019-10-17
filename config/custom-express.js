let express = require("express");
let consign = require('consign');

module.exports = () => {
    let app = express();

    consign()
        .include('rotas')
        .into(app);

    return app;
}