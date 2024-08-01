const Fabricante = require("./Fabricante")
const Produto = require("./Produto")

Produto.hasMany(Produto, {
    foreignKey: "fabricanteId",
    as: "produtos",
    onDelete: "CASCADE"
})

Fabricante.belongsTo(Fabricante, {
    foreignKey: "fabricanteId",
    as: "fabricante",
    onDelete: "CASCADE"
})

module.exports = {Produto, Fabricante}