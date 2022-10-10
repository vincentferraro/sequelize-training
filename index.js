require('./db/sequelize')
const express = require('express')
const port = 3000 
const app = express()

app.get('/', (req, res) => {
    res.send("Hello Sequelize Training")
})

app.listen(port,() => {
    console.log(`Serveur OK: http://127.0.0.1:${port}/`)
})


