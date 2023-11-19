const express = require('express')
const app = express()
app.use(express.static('public'))
const port = 3000
const bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const formularioModel = require('./modules/formulario')
formularioModel.sync()

app.get('/', (req, res) => {
  res.send('Bem vindo a loja Valda Sementes');
})

app.post('/formulario', urlencodedParser, (req, res) => {
  var nomeCliente = req.body.nome;
  var idadeCliente = req.body.idade;
  var cidadeCliente = req.body.cidade;
  var cpfCliente = req.body.cpf;

  formularioModel.create({
    nome: nomeCliente,
    idade: idadeCliente,
    cidade: cidadeCliente,
    cpf: cpfCliente
  })
  .then(function () {
    res.send("Formulário cadastrado com sucesso!");
  })
  .catch(function (erro) {
    res.send("Erro ao cadastrar formulário: " + erro);
  });
});

app.listen(port, () => {
  console.log("Esta aplicação está escutando a porta" + port) 
})