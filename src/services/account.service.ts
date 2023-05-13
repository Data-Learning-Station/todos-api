import { PrismaClient } from "@prisma/client";
import md5 from "md5";

const prisma = new PrismaClient()

export function findByUsername(username: string) {
    return prisma.account.findUnique({
        where: {
            username
        }
    })
}

export function findAccountByToken(token: string) {
    return prisma.account.findUnique({
        where: {
            token
        }
    })
}

export function createAccount(name: string, username: string, password: string) {
    return prisma.account.create({
        data: {
            name,
            username,
            password,
            token: md5(username + "." + password)
        }
    })
}

export function removeAccount(id: number) {
    return prisma.account.delete({
        where: {
            id
        }
    })
}