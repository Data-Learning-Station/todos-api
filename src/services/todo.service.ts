import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deleteTodosByAccount(id: number) {
    return prisma.todo.deleteMany({
        where: {
            accountId: id
        }
    })
} 

export async function findTodosByAccount(id: number) {
    return prisma.todo.findMany({
        where: {
            accountId: id
        }
    })
}

export async function createTodo(title: string, accountId: number) {
    return prisma.todo.create({
        data: {
            title,
            accountId
        }
    })
}

export async function updateTodo(id: number, title: string) {
    return prisma.todo.update({
        data: {
            title
        },
        where: {
            id
        }
    })
}

export async function updateTodoStatus(id: number, isCompleted: boolean) {
    return prisma.todo.update({
        data: {
            isCompleted
        },
        where: {
            id
        }
    })
}

export async function removeTodo(id: number) {
    return prisma.todo.delete({
        where: {
            id
        }
    })
}