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
exports.deleteAccount = exports.postAccount = void 0;
const account_service_1 = require("../services/account.service");
const todo_service_1 = require("../services/todo.service");
function postAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = req.body;
            const existsAccount = yield (0, account_service_1.findByUsername)(body.username);
            if (existsAccount) {
                if (existsAccount.password == body.password) {
                    res.json({
                        id: existsAccount.id,
                        name: existsAccount.name,
                        username: existsAccount.username,
                        token: existsAccount.token
                    });
                }
                else {
                    res.send('Wrong password');
                }
            }
            else {
                const { name, username, password } = body;
                const newAccount = yield (0, account_service_1.createAccount)(name, username, password);
                res.json({
                    id: newAccount.id,
                    name: newAccount.name,
                    username: newAccount.username,
                    token: newAccount.token
                });
            }
        }
        catch (error) {
            next(error);
        }
    });
}
exports.postAccount = postAccount;
function deleteAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const account = res.locals.account;
            const deletedAccount = yield (0, account_service_1.removeAccount)(account.id);
            const deletedTodos = yield (0, todo_service_1.deleteTodosByAccount)(account.id);
            res.json({
                message: "Account and todos has been deleted",
                todos: deletedTodos.count
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteAccount = deleteAccount;
