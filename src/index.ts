import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/produtos/:item', (req, res) => {
    console.log(req.params);
    return res.send("Server ON, Pai")
})

const pessoa = [
    {
        nome: "Eu",
        sobrenome: "Tu",
        apelido: "Nós",
        vulgo: "Magrelin"
    },
    {
        nome: "1",
        sobrenome: "2",
        apelido: "3",
        vulgo: "4"
    },
    {
        nome: "5",
        sobrenome: "6",
        apelido: "7",
        vulgo: "8"
    },
    {
        nome: "9",
        sobrenome: "10",
        apelido: "9",
        vulgo: "8 kkkk"
    },
]

servidor.get('/usuarios/:vulgo', (req, res) => {
    const {vulgo} = req.params

    const pessoas = pessoa.find((item) => {
        return item.vulgo === vulgo
    })

    if (!pessoas) {
        return res.send("Barro negão.")
    }
    return res.send(pessoas)
})

servidor.listen(process.env.PORT)