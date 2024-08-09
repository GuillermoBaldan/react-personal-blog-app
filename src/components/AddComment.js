// src/components/AddComment.js
import React, { useState } from 'react';

const AddComment = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        style={{ width: '100%', height: '100px', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Add Comment</button>
    </form>
  );
};

export default AddComment;
