module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('');
        res.send("ok");
    });
    app.post('/pagamentos/pagamento', function(req, res) {
        let pagamento = req.body;
        console.log("processano um novo pagamento");

        let connection = app.persistencia.connectionFactory();
        let pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamento.status = "CRIADO"
        pagamento.data = new Date();

        pagamentoDao.salva(pagamento, function(erro, resultado) {
            console.log('pagamento criado ' + resultado);
            console.log(erro)
            res.json(pagamento);
        });
    });

}

//curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type:application/json" -d @./files/pagamento.json;