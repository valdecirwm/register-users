const express = require('express')
const app = express()
const PORT = 5000
const path = require('path')
const basePath = path.join(__dirname, 'views')
const mysql = require('mysql')

//recebe json body pelo express sem precisar do modulo body-parser
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// renderizar o View Engine EJS
app.set('view engine', 'ejs')
// indicar o caminho de views
app.set('views', basePath)

// usa arquivos estáticos
app.use(express.static('public'))

// rotas da API


// chamada principal home
app.get('/', (req, res) => {
    res.render('index', {})
    console.log('TUDO FUNCIONANDO')
})

// PÁGINA 404
app.use(function(req, res, next){
    res.status(404).render('404', {})
})

// ouve a porta
app.listen(PORT, () => {
    console.log(`APLICATIVO RODANDO NA PORTA ${PORT}`)
})
