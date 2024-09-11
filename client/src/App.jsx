import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogPosts from './components/BlogPosts';
import APIPage from './pages/ApiPages'; // Assuming your APIPage is in the 'pages' folder

const categories = ["All", "Technology", "Lifestyle", "Education"];

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
        setImages(data.map(post => post.image));  // Extract images for the hero slider
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []); // If you plan to update when posts change, add posts in the dependency array

  const filterPosts = (category) => {
    if (category === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category === category));
    }
  };

  return (
    <Router>
      <div> {/* Added closing div tag */}
        <Navbar categories={categories} filterPosts={filterPosts} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero images={images} />
              <BlogPosts posts={filteredPosts} />
            </>
          } />
          <Route path="/api-documentation" element={<APIPage />} />
        </Routes>
      </div> {/* Added closing div tag */}
    </Router>
  );
}

export default App;
