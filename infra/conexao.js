const mysql = require('mysql')
const { builtinModules } = require('node:module')
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'interdisciplinar3'
})

module.exports = conexao