import { v4 as uuidv4 } from 'uuid';
import {
  loadPosts,
  getPostById,
  addNewPost,
  editPost,
} from './storage';
const localStorageMock = (function () {
    let store = {};
  
    return {
      getItem(key) {
        return store[key];
      },
  
      setItem(key, value) {
        store[key] = value;
      },
  
      clear() {
        store = {};
      },
  
      removeItem(key) {
        delete store[key];
      },
  
      getAll() {
        return store;
      },
    };
  })();
  
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe('localStorage functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('loadPosts should return an empty array if localStorage is empty', () => {
    const key = 'posts';
    const result = loadPosts(key);
    expect(result).toEqual([]);
  });

  test('loadPosts should return parsed data from localStorage', () => {
    const key = 'posts';
    const data = [{ id: uuidv4(), title: 'Test post' }];
    addNewPost(key, data[0]);
    const result = loadPosts(key);
    expect(result).toEqual(data);
  });

  test('getPostById should return an empty object if post is not found', () => {
    const key = 'posts';
    const id = 'nonexistent-id';
    const result = getPostById(key, id);
    expect(result).toEqual({});
  });

  test('getPostById should return the post with the given id', () => {
    const key = 'posts';
    const id = uuidv4();
    const data = [{ id, title: 'Test post' }];
    addNewPost(key, data[0]);
    const result = getPostById(key, id);
    expect(result).toEqual(data[0]);
  });

  test('addNewPost should add a new post to localStorage', () => {
    const key = 'posts';
    const newPost = { title: 'New post' };
    addNewPost(key, newPost);
    const storedData = loadPosts(key);
    expect(storedData).toContainEqual(expect.objectContaining(newPost));
  });

  test('editPost should update an existing post in localStorage', () => {
    const key = 'posts';
    const postId = uuidv4();
    const initialPosts = [
      { id: postId, title: 'Initial post' },
      { id: uuidv4(), title: 'Another post' },
    ];

    initialPosts.forEach((post) => {
        addNewPost(key, post);
    });

    const updatedPost = { id: postId, title: 'Updated post' };
    editPost(key, updatedPost);

    const storedData = loadPosts(key);
    const updatedPostFromStorage = storedData.find((post) => post.id === postId);
    expect(updatedPostFromStorage).toEqual(expect.objectContaining(updatedPost));
  });
});
