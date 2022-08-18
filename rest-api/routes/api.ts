import showdown from 'showdown';
import supabase from '../utils/db';

const markdownConverter = new showdown.Converter();

const getPosts = async (tag?: string, limit?: number) => {
  let query = supabase
    .from('posts')
    .select('title, url_title, date_timestamp, thumbnail_image_url')
    .lte('date_timestamp', new Date().toISOString()); // make sure future articles arent sent

  if (tag) query = query.contains('tags', [tag]);
  if (limit && !Number.isNaN(limit)) query = query.range(0, limit - 1);

  const { data, error } = await query.order('date_timestamp', { ascending: false });

  if (error) throw new Error('error fetching posts from supabase ' + error.message);
  return data;
}

const getPostByTitle = async(title: string) => {
  const { data: post, error } = await supabase.from('posts').select('*').eq('url_title', title).single();

  if (error) throw new Error(error.message);
  if (!post) throw new Error('Post not found');

  post["html_content"] = markdownConverter.makeHtml(post["markdown_content"]);
  return post;
}

const api = {
  getPosts,
  getPostByTitle,
}

export default api;
