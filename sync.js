const {Fabricante, Produto} = require("./model/associacao")
const conn = require("./db/conn")

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log("Tabelas criadas e Banco de Dados sincronizados")
    }catch(err){
        console.error("Erro na sincronização com o Banco de Dados", err)
    }finally{
        conn.close
        console.log("conexão com o banco de dados fechada")
    }
}

syncDataBase()