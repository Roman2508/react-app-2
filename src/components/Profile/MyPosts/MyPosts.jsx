import React, { createRef } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPosts = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={classes.myPosts}>
      <div>
        my post
        <div>
          <div>
            <textarea ref={newPostElement} className={classes.textarea}></textarea>
          </div>
          <div>
            <button onClick={addPosts}>Send</button>
          </div>
        </div>
        <div>{postsElements}</div>
      </div>
    </div>
  );
}

export default MyPosts;
