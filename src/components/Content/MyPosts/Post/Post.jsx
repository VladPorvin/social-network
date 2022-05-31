import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.post}>
      <img
        className={c.posts__img}
        src="https://cdn-icons-png.flaticon.com/512/560/560216.png"
        alt="error"
      />
      <span className={c.username}>Jiole Marine</span>
      <p className={c.posts__message}>{props.message}</p>
    </div>
  );
};

export default Post;
