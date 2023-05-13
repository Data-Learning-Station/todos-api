"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idParamSchema = exports.updateStatusSchema = exports.createTodoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createTodoSchema = joi_1.default.object({
    title: joi_1.default.string().required()
});
exports.updateStatusSchema = joi_1.default.object({
    isCompleted: joi_1.default.boolean().required()
});
exports.idParamSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required()
});
