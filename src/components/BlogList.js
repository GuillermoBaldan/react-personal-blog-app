// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const posts = [
    { id: 1, title: 'My First Post', excerpt: 'This is the excerpt of my first post...' },
    { id: 2, title: 'Another Day in Paradise', excerpt: 'Sharing my thoughts on a sunny day...' },
    { id: 3, title: 'React Hooks in Depth', excerpt: 'Let’s dive deep into React Hooks and understand them better...' }
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ margin: '20px 0' }}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
