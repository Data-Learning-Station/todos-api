"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createAccountSchema = joi_1.default.object({
    name: joi_1.default.string().min(4).required(),
    username: joi_1.default.string().min(5).required(),
    password: joi_1.default.string().min(4).required(),
});
