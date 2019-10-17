module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('');
        res.send("ok");
    });
    app.post('/pagamentos/pagamento', function(req, res) {
        let pagamento = req.body;
        console.log(pagamento);
        res.send("Ok");
    });
}