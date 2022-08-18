"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;
console.log('url', url, 'key', key);
const supabaseClient = (0, supabase_js_1.createClient)(url, key);
exports.default = supabaseClient;
