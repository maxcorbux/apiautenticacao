let express = require("express");
let app = express();

app.listen(3000, function(req, resp) {
    console.log('servidor rodando na porta 3000');
});

app.get('/teste', function(req, resp) {
    console.log('')
    resp.send("ok")
});