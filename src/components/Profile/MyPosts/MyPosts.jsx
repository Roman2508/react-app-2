import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

  let postsData = [
    {id: 1, message: "Hello, how are you?", likesCount: "15"},
    {id: 2, message: "It's my first project.", likesCount: "20"},
  ]

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
          <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
          <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
