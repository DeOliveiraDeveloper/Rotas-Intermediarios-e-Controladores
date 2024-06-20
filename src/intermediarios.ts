import { Request, Response, NextFunction } from "express";

export const intermediario = (req:Request, res:Response, next:NextFunction) => {
    console.log("Passei pelo intermediário");

    if (req.params.item === "sair") {
        return res.send("Deu red lek")
    }

    next()
}

export function iGeral(req:Request, res:Response, next:NextFunction) {
    console.log("Passei pelo intermediário geral");
    next()
}