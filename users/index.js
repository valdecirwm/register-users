const express = require('express')
const path = require('path')
// chamando modulo de Rotas
const router = express.Router()

// resgatar as templates html
const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/user.html`)
})

module.exports = router