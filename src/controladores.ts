import { Request, Response } from "express";

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

export function itemProdutos(req:Request, res:Response) {
    console.log(req.params.item);
    return res.send("Tudo safe!")
}

export function vulgo(req:Request, res:Response){
    const {vulgo} = req.query

    if (!vulgo) {
        return res.send("Nada à declarar 7-7")
    }

    const pessoas = pessoa.find((item) => {
        return item.vulgo === vulgo
    })

    if (!pessoas) {
        return res.send("Barro negão.")
    }
    return res.send(pessoas)
}