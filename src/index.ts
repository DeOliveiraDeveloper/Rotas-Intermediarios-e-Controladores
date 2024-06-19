import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/', (req, res) => {
    return res.send("Server ON")
})

servidor.listen(process.env.PORT)