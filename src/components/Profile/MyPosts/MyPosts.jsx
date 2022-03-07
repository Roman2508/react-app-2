import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div className={classes.myPosts}>
      <div>
        my post
        <div>
          <div>
            <textarea className={classes.textarea}></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
        <div>
          <Post message="Hello, how are you?" likesCount="15" />
          <Post message="It's my first project." likesCount="20" />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
