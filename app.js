const express = require('express')
const bodyParser = require('body-parser')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')

conexao.connect((erro => {
    if (erro) {
        console.log(erro)
    }
    else {
        console.log('conectado')
        Tabelas.init(conexao)
        
        const app = express()
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.listen(3000, () => console.log('servidor rodando'))
    }
}))


app.get('/', (req, res) => res.send('oi'))

app.get('/leaderboard', (req, res) => res.send('Você está fazendo get'))

app.post('/leaderboard', (req, res) => {
    console.log(req.body)
    res.send('Você está fazendo post')
})

