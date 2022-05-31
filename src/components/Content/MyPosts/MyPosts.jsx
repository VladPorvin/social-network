import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} />);

  return (
    <div className={c.posts}>
      <div className={c.posts__new}>
        <textarea className={c.textarea}></textarea>
        <button className={c.newpost}>Add post</button>
      </div>
      <div className={c.posts__content}>
        <h3 className={c.posts__title}>My posts</h3>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
