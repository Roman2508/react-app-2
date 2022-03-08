import React, { createRef } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  let postsElements = props.posts.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPosts = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.myPosts}>
      <div>
        my post
        <div>
          <div>
            <textarea
              value={props.newPostText}
              onChange={onPostChange}
              ref={newPostElement}
              className={classes.textarea}
            />
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
