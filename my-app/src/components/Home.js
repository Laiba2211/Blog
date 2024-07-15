import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

const Home = () => {
  const { posts, removePost } = useContext(PostContext);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      removePost(id);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Blog Posts</h1>
      <div className="list-group">
        {posts.map(post => (
          <div key={post._id} className="list-group-item">
            <Link to={`/post/${post._id}`} className="list-group-item-action">
              <h5>{post.title}</h5>
              <p>{post.summary}</p>
            </Link>
            <div className="btn-group mt-2">
              <Link to={`/edit/${post._id}`} className="btn btn-warning">Edit</Link>
              <button onClick={() => handleDelete(post._id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
