import React from 'react';

const Post = ({ content, author }) => {
  return (
    <div>
      <h3>{author}</h3>
      <p>{content}</p>
      {/* Add like and comment buttons */}
    </div>
  );
};

export default Post;
