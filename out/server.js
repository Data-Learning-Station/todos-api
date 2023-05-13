"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const account_routes_1 = __importDefault(require("./routes/account.routes"));
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1', account_routes_1.default);
app.use('/api/v1', todo_routes_1.default);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server listen on port: ' + port);
});
