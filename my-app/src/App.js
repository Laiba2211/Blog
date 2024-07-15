import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import { PostProvider } from './context/PostContext';

const App = () => {
  return (
    <PostProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </PostProvider>
  );
};

export default App;
