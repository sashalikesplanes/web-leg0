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
const db_1 = __importDefault(require("../utils/db"));
const getPosts = (tag, limit) => __awaiter(void 0, void 0, void 0, function* () {
    let query = db_1.default.from('posts').select('*');
    if (tag)
        query = query.contains('tags', [tag]);
    if (limit && !Number.isNaN(limit))
        query = query.range(0, limit - 1);
    const { data, error } = yield query;
    if (error)
        throw new Error('error fetching posts from supabase');
    console.log(data);
    return data;
});
const api = {
    getPosts,
};
exports.default = api;
