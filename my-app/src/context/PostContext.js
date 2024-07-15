import React, { createContext, useState, useEffect } from 'react';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost
} from '../api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const addPost = async (post) => {
    const response = await createPost(post);
    setPosts([...posts, response.data]);
  };

  const editPost = async (id, updatedPost) => {
    const response = await updatePost(id, updatedPost);
    setPosts(posts.map(post => (post._id === id ? response.data : post)));
  };

  const removePost = async (id) => {
    try {
      await deletePost(id); // Calls the API to delete the post
      setPosts(posts.filter(post => post._id !== id)); // Updates local state
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
    

  return (
    <PostContext.Provider value={{ posts, addPost, editPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
