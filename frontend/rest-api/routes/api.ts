import supabase from '../utils/db';

const getPosts = async (tag?: string, limit?: number) => {
  let query = supabase.from('posts').select('*');

  if (tag) query = query.contains('tags', [tag]);
  if (limit && !Number.isNaN(limit)) query = query.range(0, limit - 1);

  const { data, error } = await query;

  if (error) throw new Error('error fetching posts from supabase');
  console.log(data);
  return data;
}
const api = {
  getPosts,
}

export default api;
