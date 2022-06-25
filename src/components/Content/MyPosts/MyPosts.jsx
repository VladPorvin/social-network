import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                <button onClick={onAddPost} className={c.newpost}>
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
