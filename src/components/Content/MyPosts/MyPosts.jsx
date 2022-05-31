import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/content-reducer';
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={c.posts}>
      <div className={c.posts__new}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          className={c.textarea}
          value={props.newPostText}
        />
        <button onClick={addPost} className={c.newpost}>
          Add post
        </button>
      </div>
      <div className={c.posts__content}>
        <h3 className={c.posts__title}>My posts</h3>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
