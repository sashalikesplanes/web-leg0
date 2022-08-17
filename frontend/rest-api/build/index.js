"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(helmet_1.default);
app.get('/', (req, res) => {
    res.send('Express + TS Server, hello from live editing');
});
app.listen(port, () => {
    console.log(`[server]: Server running on http://localhost:${port}`);
});
