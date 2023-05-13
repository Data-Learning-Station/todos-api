import { Account } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { createTodo, findTodosByAccount, removeTodo, updateTodo, updateTodoStatus } from "../services/todo.service";

interface CreateTodo {
    title: string
}

interface UpdateStatus {
    isCompleted: boolean
}

export async function getTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const account: Account = res.locals.account

        const accountTodos = await findTodosByAccount(account.id)

        const todos = accountTodos.map(todo => ({
            id: todo.id,
            title: todo.title,
            isCompleted: todo.isCompleted
        }))

        res.json(todos)
    }
    catch(error: any) {
        next(error)
    }
}

export async function postTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const account: Account = res.locals.account
        const body: CreateTodo = req.body

        const todo = await createTodo(body.title, account.id)

        res.json({
            id: todo.id,
            title: todo.title,
            isCompleted: todo.isCompleted
        })
    }
    catch(error: any) {
        next(error)
    }
}

export async function putTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const id = +req.params.id
        const body: CreateTodo = req.body

        const todo = await updateTodo(id, body.title)

        res.json({
            id: todo.id,
            title: todo.title,
            isCompleted: todo.isCompleted
        })
    }
    catch(error: any) {
        next(error)
    }
}

export async function patchTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const id = +req.params.id
        const body: UpdateStatus = req.body

        const todo = await updateTodoStatus(id, body.isCompleted)

        res.json({
            id: todo.id,
            title: todo.title,
            isCompleted: todo.isCompleted
        })
    }
    catch(error: any) {
        next(error)
    }
}

export async function deleteTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const id = +req.params.id
        const todo = await removeTodo(id)
        
        res.json({
            id: todo.id,
            title: todo.title,
            isCompleted: todo.isCompleted
        })
    }
    catch(error: any) {
        next(error)
    }
}