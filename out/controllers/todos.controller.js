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
exports.deleteTodos = exports.patchTodos = exports.putTodos = exports.postTodos = exports.getTodos = void 0;
const todo_service_1 = require("../services/todo.service");
function getTodos(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const account = res.locals.account;
            const accountTodos = yield (0, todo_service_1.findTodosByAccount)(account.id);
            const todos = accountTodos.map(todo => ({
                id: todo.id,
                title: todo.title,
                isCompleted: todo.isCompleted
            }));
            res.json(todos);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getTodos = getTodos;
function postTodos(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const account = res.locals.account;
            const body = req.body;
            const todo = yield (0, todo_service_1.createTodo)(body.title, account.id);
            res.json({
                id: todo.id,
                title: todo.title,
                isCompleted: todo.isCompleted
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.postTodos = postTodos;
function putTodos(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = +req.params.id;
            const body = req.body;
            const todo = yield (0, todo_service_1.updateTodo)(id, body.title);
            res.json({
                id: todo.id,
                title: todo.title,
                isCompleted: todo.isCompleted
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.putTodos = putTodos;
function patchTodos(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = +req.params.id;
            const body = req.body;
            const todo = yield (0, todo_service_1.updateTodoStatus)(id, body.isCompleted);
            res.json({
                id: todo.id,
                title: todo.title,
                isCompleted: todo.isCompleted
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.patchTodos = patchTodos;
function deleteTodos(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = +req.params.id;
            const todo = yield (0, todo_service_1.removeTodo)(id);
            res.json({
                id: todo.id,
                title: todo.title,
                isCompleted: todo.isCompleted
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteTodos = deleteTodos;
