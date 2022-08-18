import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_ANON_KEY as string;
console.log('url', url, 'key', key)
const supabaseClient = createClient(url, key);

export default supabaseClient;
