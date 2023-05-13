import { NextFunction, Request, Response } from "express";
import { createAccount, findByUsername, removeAccount } from "../services/account.service";
import { Account } from "@prisma/client";
import { deleteTodosByAccount } from "../services/todo.service";

interface CreateDto {
    name: string,
    username: string,
    password: string
}

export async function postAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const body: CreateDto = req.body

        const existsAccount = await findByUsername(body.username)

        if (existsAccount) {

            if (existsAccount.password == body.password) {
                res.json({
                    id: existsAccount.id,
                    name: existsAccount.name,
                    username: existsAccount.username,
                    token: existsAccount.token
                })
            }
            else {
                res.send('Wrong password')
            }
        }
        else {
            const { name, username, password } = body

            const newAccount = await createAccount(name, username, password)

            res.json({
                id: newAccount.id,
                name: newAccount.name,
                username: newAccount.username,
                token: newAccount.token
            })
        }

    }
    catch(error: any) {
        next(error)
    }
}

export async function deleteAccount(req: Request, res: Response, next: NextFunction) {
    try {
        const account: Account = res.locals.account

        const deletedAccount = await removeAccount(account.id)
        const deletedTodos = await deleteTodosByAccount(account.id)
        
        res.json({
            message: "Account and todos has been deleted",
            todos: deletedTodos.count
        })
    }
    catch(error: any) {
        next(error)
    }
}