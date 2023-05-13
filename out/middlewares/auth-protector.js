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
const account_service_1 = require("../services/account.service");
function authProtector(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Basic 
        const header = req.header('Authorization');
        if (!header) {
            return res.status(403).send('Token not provided');
        }
        const [method, token] = header.split(' ');
        if (!token) {
            return res.status(403).send('Token not provided');
        }
        const account = yield (0, account_service_1.findAccountByToken)(token);
        if (!account) {
            return res.status(403).send('Token invalid');
        }
        res.locals.account = account;
        next();
    });
}
exports.default = authProtector;
