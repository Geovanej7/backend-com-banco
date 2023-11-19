const Sequelize = require('sequelize')
const sequelize = new Sequelize("valdasementes", "root", "CreateBancoGeo1",{
host:'localhost',
dialect:'mysql'
})

sequelize.authenticate().then(function(){
console.log("Conectado!!")
}).catch(function(erro){
console.log("Erro ao conectar: "+erro)
})

const formulario = sequelize.define('formulario',{

nome: {
type: Sequelize.STRING
},
idade: {
type: Sequelize.INTEGER
},
cidade: {
type: Sequelize.STRING
},
cpf: {
type: Sequelize.STRING
}
})

module.exports = formulario