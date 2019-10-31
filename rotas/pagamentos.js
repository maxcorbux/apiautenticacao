module.exports = function(app) {
        app.get('/pagamentos', function(req, res) {
            console.log('');
            res.send("ok");
        });
        app.post('/pagamentos/pagamento', function(req, res) {
            req.assert("forma_de_pagamento", "Forma de pagamento é obrigatória").notEmpty();
            req.assert("valor", "valor eh obrigatorio e deve ser um decimal").notEmpty().isFloat();
            let erros = req.validationErros();
            if (erros) {
                console.log('Erros de validacao encontrados');
                res.status(400).send(erros);
                return
            }

            let pagamento = req.body;
            console.log("processano um novo pagamento");

            let connection = app.persistencia.connectionFactory();
            let pagamentoDao = new app.persistencia.PagamentoDao(connection);

            pagamento.status = "CRIADO"
            pagamento.data = new Date();

            pagamentoDao.salva(pagamento, function(erro, resultado) {
                if (erro) {
                    console.log('erro ao inserir no banco: ' + erro);
                    res.status(400).send(erro);
                } else {
                    console.log('pagamento criado ' + resultado);
                    console.log(erro);
                    res.json(pagamento);
                }
            });
        });
    }
    // teste
    //curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamento.json