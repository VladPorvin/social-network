import React from 'react';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
  return (
    <section className={s.content}>
      <ProfileInfo />
      <MyPosts
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
        posts={props.state.posts}
      />
    </section>
  );
};

export default Content;
