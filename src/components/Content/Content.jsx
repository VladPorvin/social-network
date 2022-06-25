import React from 'react';
import s from './Content.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = (props) => {
    return (
        <section className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </section>
    );
};

export default Content;
