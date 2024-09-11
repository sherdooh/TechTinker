import React from 'react';

const APIPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg max-w-4xl w-full p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          API Documentation
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            API Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our modern API. Below you find the available endpoints for accessing and managing your blogs data, including users, blog posts, and more. Use these endpoints to integrate with our platform seamlessly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Endpoints
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium text-gray-800">
                1. <span className="font-bold">GET /api/posts</span>
              </h3>
              <p className="text-gray-600">
                Fetch all blog posts from the server. This will return a JSON array of blog posts.
              </p>
              <div className="bg-gray-50 p-4 mt-2 rounded-md">
                <code className="text-gray-800 font-mono">GET /api/posts</code>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium text-gray-800">
                2. <span className="font-bold">POST /api/posts</span>
              </h3>
              <p className="text-gray-600">
                Create a new blog post by sending a JSON object containing title, content, and image URL.
              </p>
              <div className="bg-gray-50 p-4 mt-2 rounded-md">
                <code className="text-gray-800 font-mono">POST /api/posts</code>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-medium text-gray-800">
                3. <span className="font-bold">GET /api/posts/:id</span>
              </h3>
              <p className="text-gray-600">
                Fetch a specific blog post by its ID. The ID should be passed as a parameter.
              </p>
              <div className="bg-gray-50 p-4 mt-2 rounded-md">
                <code className="text-gray-800 font-mono">GET /api/posts/:id</code>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-medium text-gray-800">
                4. <span className="font-bold">DELETE /api/posts/:id</span>
              </h3>
              <p className="text-gray-600">
                Delete a specific blog post by its ID. You must pass the ID of the post as a parameter.
              </p>
              <div className="bg-gray-50 p-4 mt-2 rounded-md">
                <code className="text-gray-800 font-mono">DELETE /api/posts/:id</code>
              </div>
            </div>

          </div>
        </section>

        <footer className="mt-8 text-gray-600 text-center">
          © {new Date().getFullYear()} MyBlog API. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default APIPage;
