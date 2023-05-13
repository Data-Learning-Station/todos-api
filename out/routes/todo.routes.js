"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controller_1 = require("../controllers/todos.controller");
const express_joi_validation_1 = require("express-joi-validation");
const auth_protector_1 = __importDefault(require("../middlewares/auth-protector"));
const todo_validation_1 = require("../validations/todo.validation");
const todoRoutes = (0, express_1.Router)();
const validator = (0, express_joi_validation_1.createValidator)();
todoRoutes.use(auth_protector_1.default);
todoRoutes.get('/todos', todos_controller_1.getTodos);
todoRoutes.post('/todos', validator.body(todo_validation_1.createTodoSchema), todos_controller_1.postTodos);
todoRoutes.put('/todos/:id', validator.params(todo_validation_1.idParamSchema), validator.body(todo_validation_1.createTodoSchema), todos_controller_1.putTodos);
todoRoutes.patch('/todos/:id', validator.params(todo_validation_1.idParamSchema), validator.body(todo_validation_1.updateStatusSchema), todos_controller_1.patchTodos);
todoRoutes.delete('/todos/:id', validator.params(todo_validation_1.idParamSchema), todos_controller_1.deleteTodos);
exports.default = todoRoutes;
