import { Request, Response, NextFunction } from "express";
import { findAccountByToken } from "../services/account.service";

async function authProtector(req: Request, res: Response, next: NextFunction) {

    // Basic 
    const header = req.header('Authorization')

    if (!header) {
        return res.status(403).send('Token not provided')
    }

    const [method, token] = header.split(' ')

    if (!token) {
        return res.status(403).send('Token not provided')
    }

    const account = await findAccountByToken(token)

    if (!account) {
        return res.status(403).send('Token invalid')
    }

    res.locals.account = account

    next()
}

export default authProtector