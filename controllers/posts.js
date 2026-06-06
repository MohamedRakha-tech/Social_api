const postsService = require('../services/posts');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await postsService.getAllPosts();
    res.status(200).json({
      message: 'Fetched posts successfully.',
      posts: posts
    });
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const post = await postsService.getPostById(postId);
    res.status(200).json({ message: 'Post fetched.', post: post });
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const result = await postsService.createPost(req.body, req.userId);
    res.status(201).json({
      message: 'Post created successfully!',
      post: result.post,
      creator: result.creator
    });
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const result = await postsService.updatePost(postId, req.body, req.userId);
    res.status(200).json({ message: 'Post updated!', post: result });
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    await postsService.deletePost(postId, req.userId);
    res.status(200).json({ message: 'Deleted post.' });
  } catch (err) {
    next(err);
  }
};
