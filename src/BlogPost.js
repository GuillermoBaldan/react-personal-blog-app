// src/components/BlogPost.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddComment from './AddComment';

const BlogPost = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const post = {
    id,
    title: `Post ${id}`,
    content: `This is the full content of post ${id}. It provides more in-depth information and insights.`
  };

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <AddComment addComment={addComment} />
    </div>
  );
};

export default BlogPost;
