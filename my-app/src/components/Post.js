import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

const Post = () => {
  const { id } = useParams();
  const { posts, removePost } = useContext(PostContext);
  const post = posts.find(p => p._id === id);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      removePost(id);
      navigate('/');
    }
  };

  if (!post) {
    return <div className="container mt-5"><h2>Post not found</h2></div>;
  }

  return (
    <div className="container mt-5">
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      <div>{post.content}</div>
      <div className="btn-group mt-3">
        <Link to={`/edit/${post._id}`} className="btn btn-warning">Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Post;
