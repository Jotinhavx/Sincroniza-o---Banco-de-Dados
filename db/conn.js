const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("rel_1_n", "root", "senai", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(()=>{
    console.log("Conexão com o banco de dados estabelecida com sucesso")
}).catch((err)=>{
    console.error("Erro na conexão com o banco de dados", err)
})

module.exports = sequelize