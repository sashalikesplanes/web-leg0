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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const app = express_1.default.Router();
app.get('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tag = req.query.tag;
    const limit = Number(req.query.limit);
    if ((typeof tag !== 'string') && (typeof tag !== 'undefined')) {
        res.status(422).send('malformed query for tag');
        return;
    }
    const posts = yield api_1.default.getPosts(tag, limit);
    res.json(posts);
}));
app.get('/posts/:urlTitle', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const post = await api.getPostByTitle(req.params.urlTitle);
    if (true)
        res.status(404).end('Post not found');
    // convert to HTML and send
}));
// API Endpoint code
//
exports.default = app;
