"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === 'dev' ? process.env.FRONTEND_DEV_URL : process.env.FRONTEND_PROD_URL
}));
const port = process.env.PORT || 5000;
app.use((0, helmet_1.default)());
app.use(routes_1.default);
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '..', '..', 'assets')));
app.listen(port, () => {
    console.log(`[server]: Server running on http://localhost:${port}`);
});
