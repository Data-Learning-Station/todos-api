"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.updateTodoStatus = exports.updateTodo = exports.createTodo = exports.findTodosByAccount = exports.deleteTodosByAccount = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function deleteTodosByAccount(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.todo.deleteMany({
            where: {
                accountId: id
            }
        });
    });
}
exports.deleteTodosByAccount = deleteTodosByAccount;
function findTodosByAccount(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.todo.findMany({
            where: {
                accountId: id
            }
        });
    });
}
exports.findTodosByAccount = findTodosByAccount;
function createTodo(title, accountId) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.todo.create({
            data: {
                title,
                accountId
            }
        });
    });
}
exports.createTodo = createTodo;
function updateTodo(id, title) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.todo.update({
            data: {
                title
            },
            where: {
                id
            }
        });
    });
}
exports.updateTodo = updateTodo;
function updateTodoStatus(id, isCompleted) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.todo.update({
            data: {
                isCompleted
            },
            where: {
                id
            }
        });
    });
}
exports.updateTodoStatus = updateTodoStatus;
function removeTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.todo.delete({
            where: {
                id
            }
        });
    });
}
exports.removeTodo = removeTodo;
