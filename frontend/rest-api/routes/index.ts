import express from 'express';
import api from './api';

const app = express.Router();

// all posts, 5 posts, by tag
// by default return all posts, limit can be requested, tag(s) can be specified
app.get('/posts', async (req, res) => {
  // takes tags and limit
  const tag = req.query.tag;
  const limit = Number(req.query.limit);

  if ((typeof tag !== 'string') && (typeof tag !== 'undefined')) {
    res.status(422).send('malformed query for tag');
    return;
  }

  const posts = await api.getPosts(tag, limit);
  res.json(posts);
})

app.get('/posts/:urlTitle', async (req, res) => {
  // const post = await api.getPostByTitle(req.params.urlTitle);
  if (true) res.status(404).end('Post not found');
  // convert to HTML and send
})

// API Endpoint code
//
export default app;
