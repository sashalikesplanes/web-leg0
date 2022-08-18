import express from 'express';
import api from './api';

const app = express.Router();

app.get('/posts', async (req, res) => {
  const tag = req.query.tag;
  const limit = Number(req.query.limit);

  if ((typeof tag !== 'string') && (typeof tag !== 'undefined')) {
    res.status(422).send('malformed query for tag');
    return;
  }

  try {
    const posts = await api.getPosts(tag, limit);
    res.json(posts);
  } catch (e) {
    const error = e as Error;
    res.status(503).send(error.message);
  }
});

app.get('/posts/:urlTitle', async (req, res) => {
  try {
    const post = await api.getPostByTitle(req.params.urlTitle);
    if (!post) res.status(404).end('Post not found');
    res.json(post);
  } catch(e) {
    const error = e as Error;
    res.status(404).send(error.message);
  }
});

export default app;
