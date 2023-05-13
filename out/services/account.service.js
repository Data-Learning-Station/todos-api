"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAccount = exports.createAccount = exports.findAccountByToken = exports.findByUsername = void 0;
const client_1 = require("@prisma/client");
const md5_1 = __importDefault(require("md5"));
const prisma = new client_1.PrismaClient();
function findByUsername(username) {
    return prisma.account.findUnique({
        where: {
            username
        }
    });
}
exports.findByUsername = findByUsername;
function findAccountByToken(token) {
    return prisma.account.findUnique({
        where: {
            token
        }
    });
}
exports.findAccountByToken = findAccountByToken;
function createAccount(name, username, password) {
    return prisma.account.create({
        data: {
            name,
            username,
            password,
            token: (0, md5_1.default)(username + "." + password)
        }
    });
}
exports.createAccount = createAccount;
function removeAccount(id) {
    return prisma.account.delete({
        where: {
            id
        }
    });
}
exports.removeAccount = removeAccount;
