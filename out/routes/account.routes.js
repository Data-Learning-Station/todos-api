"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("../controllers/account.controller");
const express_joi_validation_1 = require("express-joi-validation");
const account_validation_1 = require("../validations/account.validation");
const auth_protector_1 = __importDefault(require("../middlewares/auth-protector"));
const accountRoutes = (0, express_1.Router)();
const validator = (0, express_joi_validation_1.createValidator)();
accountRoutes.post('/account', validator.body(account_validation_1.createAccountSchema), account_controller_1.postAccount);
accountRoutes.delete('/account', auth_protector_1.default, account_controller_1.deleteAccount);
exports.default = accountRoutes;
