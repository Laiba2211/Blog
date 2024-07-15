import axios from 'axios';

const API_URL = 'http://localhost:5000/posts';

export const getPosts = async () => {
  return await axios.get(API_URL);
};

export const getPostById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createPost = async (post) => {
  return await axios.post(API_URL, post);
};

export const updatePost = async (id, post) => {
  return await axios.put(`${API_URL}/${id}`, post);
};


export const deletePost = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error in deletePost:', error.response ? error.response.data : error.message);
    throw error; // Rethrow to handle in removePost
  }
};
