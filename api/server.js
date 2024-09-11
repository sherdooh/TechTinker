const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample blog posts data stored in JSON format
const blogPosts = [
  {
    id: 1,
    title: "Creating a Modern Blog",
    content: "A guide on how to create a modern blog using Vite, React, and Tailwind CSS.",
    image: "https://example.com/image1.jpg",
    category: "Development"
  },
  {
    id: 2,
    title: "Design Tips for Beginners",
    content: "Here are some useful design tips to get you started on your creative journey.",
    image: "https://example.com/image2.jpg",
    category: "Design"
  }
];

// API endpoint to fetch blog posts
app.get('/api/blog-posts', (req, res) => {
  res.json(blogPosts);
});

// Start server
app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});
