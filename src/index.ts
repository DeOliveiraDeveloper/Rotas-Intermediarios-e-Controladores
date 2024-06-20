import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import { itemProdutos } from './controladores'
import { iGeral, intermediario } from './intermediarios'

const servidor = express()

servidor.use(iGeral)

servidor.get('/produtos/:item', intermediario, itemProdutos)

servidor.get('/usuarios/:vulgo', )

servidor.listen(process.env.PORT)