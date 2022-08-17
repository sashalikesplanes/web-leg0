import supabase from '../utils/db';

const getPosts = async (tag?: string, limit?: number) => {
  let query = supabase
    .from('posts')
    .select('title, url-title, date-timestamp, tags, thumbnail-image-url')
    .lte('date-timestamp', new Date().toISOString()); // make sure future articles arent sent

  if (tag) query = query.contains('tags', [tag]);
  if (limit && !Number.isNaN(limit)) query = query.range(0, limit - 1);

  const { data, error } = await query.order('date-timestamp', { ascending: false });

  if (error) throw new Error('error fetching posts from supabase');
  console.log(data);
  return data;
}
const api = {
  getPosts,
}

export default api;
