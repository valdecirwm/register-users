const express = require('express')
const app = express()
const PORT = 5000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

// importa o router do /users/index.js
const users = require('./users/index.js')

//recebe json body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// usa arquivos estáticos
app.use(express.static('public'))

// rotas da API
app.use('/users', users)

// chamada principal home
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
    console.log('TUDO FUNCIONANDO')
})

// PÁGINA 404
app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

// ouve a porta
app.listen(PORT, () => {
    console.log(`APLICATIVO RODANDO NA PORTA ${PORT}`)
})
