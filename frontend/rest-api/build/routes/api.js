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
const showdown_1 = __importDefault(require("showdown"));
const db_1 = __importDefault(require("../utils/db"));
const markdownConverter = new showdown_1.default.Converter();
const getPosts = (tag, limit) => __awaiter(void 0, void 0, void 0, function* () {
    let query = db_1.default
        .from('posts')
        .select('title, url_title, date_timestamp, thumbnail_image_url')
        .lte('date_timestamp', new Date().toISOString()); // make sure future articles arent sent
    if (tag)
        query = query.contains('tags', [tag]);
    if (limit && !Number.isNaN(limit))
        query = query.range(0, limit - 1);
    const { data, error } = yield query.order('date_timestamp', { ascending: false });
    if (error)
        throw new Error('error fetching posts from supabase ' + error.message);
    return data;
});
const getPostByTitle = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: post, error } = yield db_1.default.from('posts').select('*').eq('url_title', title).single();
    if (error)
        throw new Error(error.message);
    if (!post)
        throw new Error('Post not found');
    post["html_content"] = markdownConverter.makeHtml(post["markdown_content"]);
    return post;
});
const api = {
    getPosts,
    getPostByTitle,
};
exports.default = api;
