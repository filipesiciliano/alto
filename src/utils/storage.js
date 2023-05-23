import { v4 as uuidv4 } from 'uuid';

const loadPosts = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const getPostById = (key, id) => {
  const posts = loadPosts(key);
  return posts.find((post) => post.id === id) || {};
};

const addNewPost = (key, newPost) => {
  const posts = loadPosts(key);
  const updatedPosts = [...posts, { id: uuidv4(), ...newPost }];
  localStorage.setItem(key, JSON.stringify(updatedPosts));
};

const editPost = (key, updatedPost) => {
  const posts = loadPosts(key);
  const updatedPosts = posts.map((post) => {
    if (post.id === updatedPost.id) {
      return { ...post, ...updatedPost };
    }
    return post;
  });
  localStorage.setItem(key, JSON.stringify(updatedPosts));
};

export { loadPosts, getPostById, addNewPost, editPost };
