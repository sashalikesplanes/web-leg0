"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;
const supabaseClient = (0, supabase_js_1.createClient)(url, key);
exports.default = supabaseClient;
